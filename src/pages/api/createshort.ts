import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";

interface reqBody {
  url: string;
  slug: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, slug } = req.body as reqBody;

  if (!url || !slug) {
    return res.status(400).json({ message: "enter all fields" });
  }

  await prisma.shortLinks.create({ data: { url, slug } }).catch((reason) => {
    return res.status(502).json({ message: "this slug already exists, noob" });
  });

  return res.redirect("/createshort");
};

export default handler;
