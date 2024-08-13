import express from "express";
import route from "./router";
import morgan from "morgan";
import cors from "cors";
import { protectRoute } from "./modules/auth";
import { createUser, signinUser } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
  res.status(200);
});

app.use("/api", protectRoute, route);
app.post("/user", createUser);
app.post("/signin", signinUser);

export default app;
