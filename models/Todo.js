import express from "express";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    subject: {type:String, required: true},
    name: {type:String, required: true},
    content: {type: String, required: true},
    due_date: {type:Date, required: true},
    assignment: {type: String}
});
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;