import express from "express";
import morgan from "morgan";
import nunjucks from "nunjucks";
import path from "path";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import boardRouter from"./routers/boardRouter.js";

const app=express();
const logger=morgan("dev");
const PORT=8400;

app.set("view engine", "html"); // nunjucks 설정
nunjucks.configure("views", {
    express: app, // express : app, 사용할 객체 지정
    watch: true, // watch: true 옵션을 사용하면 HTML파일이 변경될 때 템플릿 엔진 다시 렌더링
}); // nunjucks 폴더 설정

app.use(logger); // morgan middleware 사용
app.use(express.static(path.join(__dirname, './views')));

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/board", boardRouter);

const handleListener = () => {
    console.log(`Hello! let's start http://localhost:${PORT}`);
};

app.listen(PORT, handleListener);