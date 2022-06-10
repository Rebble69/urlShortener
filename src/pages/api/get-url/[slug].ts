import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"] as string;

  if (!slug || typeof slug !== "string") {
    return res
      .status(404)
      .json({ message: "pls use with a slug / pls only use string slug" });
  }

  if (Array.isArray(slug)) {
    return res.status(400).json({ message: "pls only use oneslug" });
  }

  const data = await prisma.shortLinks.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=99999, stale-while-revalidate");

    return res.status(404).json({ message: "slug not found" });
  }

  return res.json(data);
};

export default handler;
