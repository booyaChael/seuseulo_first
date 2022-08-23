import express from "express";
import {getTodo, postTodo} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/todo/:id").get(getTodo).post(postTodo);
export default userRouter;