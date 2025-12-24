// =================== IMPORTS ===================
//import { db } from "./db/index.js";
import { todoTable } from "./db/schema.js";
import { ilike, eq } from "drizzle-orm";
import OpenAI from "openai";
import readlineSync from "readline-sync";

import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);


// =================== TOOLS ===================
async function getAllTodos() {
  return await db.select().from(todoTable);
}

async function createTodo(todo) {
  const [result] = await db
    .insert(todoTable)
    .values({ todo })
    .returning({ id: todoTable.id });

  return result.id;
}

async function searchTodo(search) {
  return await db
    .select()
    .from(todoTable)
    .where(ilike(todoTable.todo, `%${search}%`));
}

async function deleteTodoId(id) {
  await db.delete(todoTable).where(eq(todoTable.id, id));
}

const tools = {
  getAllTodos,
  createTodo,
  searchTodo,
  deleteTodoId,
};

// =================== OPENAI ===================
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// =================== SYSTEM PROMPT ===================
const SYSTEM_PROMPT = `
You are an AI todo list assistant.

You MUST always respond in JSON with one of the following types:
- plan
- action
- observation
- output

Available tools:
- getAllTodos
- createTodo(todo: string)
- searchTodo(query: string)
- deleteTodoId(id: number)

Example flow:
{ "type": "plan", "plan": "I will create a todo" }
{ "type": "action", "function": "createTodo", "input": "Buy milk" }
{ "type": "observation", "observation": 1 }
{ "type": "output", "output": "Todo created successfully" }
`;

const messages = [{ role: "system", content: SYSTEM_PROMPT }];

// =================== AGENT LOOP ===================
(async function runAgent() {
  while (true) {
    const userInput = readlineSync.question("\n🧑 You: ");
    messages.push({
      role: "user",
      content: JSON.stringify({ type: "user", user: userInput }),
    });

    while (true) {
      const chat = await client.chat.completions.create({
        model: "gpt-4o",
        messages,
        response_format: { type: "json_object" },
      });

      const result = chat.choices[0].message.content;
      messages.push({ role: "assistant", content: result });

      const action = JSON.parse(result);

      if (action.type === "output") {
        console.log("\n🤖 AI:", action.output);
        break;
      }

      if (action.type === "action") {
        const fn = tools[action.function];
        if (!fn) throw new Error("Invalid tool");

        const observation = await fn(action.input);

        messages.push({
          role: "developer",
          content: JSON.stringify({
            type: "observation",
            observation,
          }),
        });
      }
    }
  }
})();
