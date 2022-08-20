import express from "express";
import {home} from "../controllers/rootController.js";
import {getLogin} from "../controllers/userController.js";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/login", getLogin);
export default rootRouter;