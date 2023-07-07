import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/src/libs/server/withHandler";
import client from "@/src/libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  console.log(token);
  res.status(200).end();
}

export default withHandler("POST", handler);
