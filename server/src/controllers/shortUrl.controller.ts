import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

export const createShortUrl = async (req: Request, res: Response) => {
  const { url } = req.body;
  const newUrl = await shortUrl.create({ url });

  return res.send(newUrl);
};

export const handleRedirect = async (req: Request, res: Response) => {
  const { shortId } = req.params;

  const short = await shortUrl.findOne({ shortId }).lean();

  if (!short) {
    return res.sendStatus(404);
  }

  // analytics.create({ shortUrl: short._id });

  return res.redirect(short.url);
};
