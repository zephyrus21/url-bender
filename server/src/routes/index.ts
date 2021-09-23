import { Express, Request, Response } from "express";
import {
  createShortUrl,
  handleRedirect,
} from "../controllers/shortUrl.controller";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

  app.post("/api/url", createShortUrl);

  app.get("/:shortId", handleRedirect);
};

export default routes;
