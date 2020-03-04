import express from "express";
import { index, addMovie, searchMovie } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter
  .route("/create")
  .get(addMovie)
  .post(addMovie);

movieRouter.get("/search", searchMovie);
movieRouter.get("/", index);
export default movieRouter;
