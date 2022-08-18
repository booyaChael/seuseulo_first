import express from "express";
import rootRouter from "./src/routers/rootRouter.js";
import userRouter from "./src/routers/userRouter.js";

//localhost port 4000에 올리기
const app = express();
const port = 4000;
const handleListening = () => console.log(`Server listening on port ${port} 🐣`);

app.listen(port,handleListening);

//앱 세팅-view
app.set("view engine", "pug");
app.set("views", "./views");

//앱 세팅-router
app.use("/", rootRouter);
app.use("/user", userRouter);