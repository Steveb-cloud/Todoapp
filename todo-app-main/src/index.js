import express from "express";
import routerTODOS from "./routes/todo.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(routerTODOS);

app.listen(3000, () => console.log("Server is running on port ",3000));

