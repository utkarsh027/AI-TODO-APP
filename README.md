# AI-TODO-APP
AI Agent with OpenAI and Postgres

# 🧠 Agentic AI Todo App

An Agentic AI–powered Todo application built with Node.js, OpenAI, Drizzle ORM, and PostgreSQL, where an AI agent can plan, decide, and act on your todos instead of just responding like a chatbot.

This project is designed to be beginner-friendly, reproducible, and production-oriented.

# 🚀 What This Project Does

Unlike a normal todo app, this project uses Agentic AI, meaning the AI:

Understands user intent

Plans actions (PLAN)

Executes tools (ACTION)

Observes results (OBSERVATION)


# Example interaction:
🧑 You: add a todo to buy milk

🤖 AI: Todo created successfully for buying milk.

# 🧩 Tech Stack

Node.js (v25+)

OpenAI API

PostgreSQL (via Docker)

Drizzle ORM

pnpm (package manager)

Agentic AI architecture

ES Modules

Produces final output (OUTPUT)

# 🧠 Agent Architecture

The AI follows this strict lifecycle:

START → PLAN → ACTION → OBSERVATION → OUTPUT

# Tools Available to the Agent

getAllTodos

createTodo(todo: string)

searchTodo(query: string)

deleteTodoId(id: number)

The AI must output valid JSON at every step.

# ⚙️ Prerequisites

Make sure you have:

Node.js v25+

Docker Desktop (Apple Silicon supported)

pnpm

OpenAI API key

# 🛠️ Setup Instructions (Step-by-Step)
1️⃣ Clone the Repository
```
git clone https://github.com/utkarsh027/ai-todo-app.git
cd ai-todo-app
```
# 2️⃣ Install Dependencies
```
pnpm install
```
# 3️⃣ Create .env File

Create a file named .env in the root:
```
DATABASE_URL=postgres://admin:admin@localhost:5431/postgres
OPENAI_API_KEY=your_openai_api_key_here

```
# 4️⃣ Start PostgreSQL (Docker)
```
docker compose up -d
```
# 5️⃣ Run Database Migrations
```
pnpm drizzle-kit generate
pnpm drizzle-kit push
```
# 6️⃣ Run the AI Agent
```
node index.js
```
# You will see:
# 🧑 You:

# Start typing commands like:

add a todo to buy milk

show all todos

search todo milk

delete todo with id 1

# 🧪 Example Interaction
🧑 You: add a todo to buy milk

🤖 AI: Todo created successfully for buying milk.






