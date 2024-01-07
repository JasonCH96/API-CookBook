import "reflect-metadata"
import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/user.routes.js";

const app = express();

app.set("port", 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

export default app;