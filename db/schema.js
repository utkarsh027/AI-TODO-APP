import { pgTable, integer, text, timestamp } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todos", {
  id: integer("id")
    .primaryKey()
    .generatedAlwaysAsIdentity(),

  todo: text("todo").notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date()),
});
