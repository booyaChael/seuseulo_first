import express from "express";
import {getHome, postHome} from "../controllers/rootController.js";
import {getLogin} from "../controllers/userController.js";
const rootRouter = express.Router();

rootRouter.route("/").get(getHome).post(postHome);
rootRouter.get("/login", getLogin);
export default rootRouter;