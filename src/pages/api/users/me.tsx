import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/src/libs/server/withHandler";
import client from "@/src/libs/server/client";
import { withApiSession } from "@/src/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(withHandler("GET", handler));
