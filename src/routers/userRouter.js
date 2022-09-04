import express from "express";
import {getTodo, postTodo, deleteTodo} from "../controllers/userController.js";

const userRouter = express.Router();


userRouter.route("/todo/:id").get(getTodo).post(postTodo);
userRouter.route("/todo/:id/delete").get(deleteTodo);
export default userRouter;