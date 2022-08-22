import { text } from "express";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    subject: String,
    name: String,
    content: String,
    due_date: Date,
});
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;