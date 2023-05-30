import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      name: "h1",
      email: "h1",
    },
  });

  res.json({
    ok: true,
  });
}
