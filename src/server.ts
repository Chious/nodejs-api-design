import express from "express";
import route from "./router";
import morgan from "morgan";
import cors from "cors";

const app = express();

const customLogger = (message) => (req, res, next) => {
  console.log(message);
  next();
};

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger("Hello from custom logger"));

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
  res.status(200);
});

app.use("/api", route);

export default app;
