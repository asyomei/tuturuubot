import { Context, Filter } from "grammy";
import { env } from "./env";

export async function onInlineQuery(ctx: Filter<Context, "inline_query">): Promise<void> {
  await ctx.answerInlineQuery([
    {
      type: "audio",
      id: "tuturuu",
      audio_url: env.TUTURUU_URL,
      performer: "Mayuri",
      title: "Tu tu ruu!",
    },
  ]);
}
