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
