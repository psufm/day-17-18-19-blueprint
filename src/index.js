import "./db";
import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./router/movieRouter";
import idRouter from "./router/idRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/:id", idRouter);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(80, () => console.log(`✅  Server Ready!`));
