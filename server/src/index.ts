import express from "express";
import config from "config";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";
import db from "./db";

const app = express();
app.use(cors());

app.use(bodyParser.json());

const port = config.get("port");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  routes(app);
  db();
});
