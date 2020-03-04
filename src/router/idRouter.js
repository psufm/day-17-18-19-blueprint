import express from "express";
import {
  editMovie,
  deleteMovie,
  movieDetail
} from "../controller/movieController";

const idRouter = express.Router();

idRouter
  .route("/edit")
  .get(editMovie)
  .post(editMovie);
idRouter.get("/delete", deleteMovie);
idRouter.get("/", movieDetail);

export default idRouter;
