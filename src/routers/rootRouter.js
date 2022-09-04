import express from "express";
import {getHome, postHome, getJoin, postJoin} from "../controllers/rootController.js";
import {getLogin} from "../controllers/userController.js";
const rootRouter = express.Router();

rootRouter.route("/").get(getHome).post(postHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", getLogin);
export default rootRouter;