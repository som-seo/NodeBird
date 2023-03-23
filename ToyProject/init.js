import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import boardRouter from"./routers/boardRouter";

const app=express();
const PORT=8400;

const handleListener=()=>{
    console.log(`Hello! Let's start http://localhost:${PORT}`);
};

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/board", boardRouter);

app.listen(PORT, handleListener);