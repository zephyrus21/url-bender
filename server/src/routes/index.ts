import { Express, Request, Response } from "express";
import {
  createShortUrl,
  getAnalytics,
  handleRedirect,
} from "../controllers/shortUrl.controller";
import validateResource from "../middlewares/validateResource";
import createShortUrlSchema from "../schema/createShortUrl.schema";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

  app.post("/api/url", validateResource(createShortUrlSchema), createShortUrl);

  app.get("/:shortId", handleRedirect);

  app.get("/api/analytics", getAnalytics);
};

export default routes;
