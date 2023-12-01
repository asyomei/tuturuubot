import { run } from "@grammyjs/runner";
import { Bot } from "grammy";
import { env } from "./env";
import { onInlineQuery } from "./inline";

const bot = new Bot(env.BOT_TOKEN);

bot.on("inline_query", onInlineQuery);

const runner = run(bot);

process.once("SIGINT", exit);
process.once("SIGTERM", exit);

await bot.init();
console.log(`@${bot.botInfo.username} started`);

async function exit() {
  console.log("Goodbye!");

  if (runner.isRunning()) {
    await runner.stop();
  }
}
