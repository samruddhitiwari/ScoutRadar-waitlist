import { Router, type IRouter } from "express";
import { db, waitlistTable } from "@workspace/db";
import { JoinWaitlistBody, JoinWaitlistResponse, GetWaitlistCountResponse } from "@workspace/api-zod";
import { count } from "drizzle-orm";

const router: IRouter = Router();

router.post("/waitlist", async (req, res) => {
  const parsed = JoinWaitlistBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid email address" });
    return;
  }

  const { email } = parsed.data;

  try {
    await db.insert(waitlistTable).values({ email });
    const response = JoinWaitlistResponse.parse({
      success: true,
      message: "You're on the waitlist! We'll notify you at launch.",
    });
    res.json(response);
  } catch (err: unknown) {
    const pgError = err as { code?: string; cause?: { code?: string } };
    const code = pgError?.code ?? pgError?.cause?.code;
    if (code === "23505") {
      res.status(409).json({ error: "You're already on the waitlist!" });
      return;
    }
    console.error("Waitlist insert error:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

router.get("/waitlist", async (_req, res) => {
  const result = await db.select({ count: count() }).from(waitlistTable);
  const total = result[0]?.count ?? 0;
  const response = GetWaitlistCountResponse.parse({ count: total });
  res.json(response);
});

export default router;
