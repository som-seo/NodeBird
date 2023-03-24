import express from "express";
import {seeBoard, editBoard, deleteBoard, writeBoard} from "../controllers/boardController.js";

const boardRouter=express.Router();

boardRouter.get("/:id", seeBoard);
boardRouter.get("/:id/edit", editBoard);
boardRouter.get("/:id/delete", deleteBoard);
boardRouter.get("/write", writeBoard);

export default boardRouter;