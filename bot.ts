import { Telegraf } from "telegraf";
import { config } from "dotenv";
import { shouldEcho } from "./shouldEcho";

config();

const botToken = process.env.BOT_TOKEN;
const sourceChatId = process.env.SOURCE_CHAT_ID;
const targetChatId = process.env.TARGET_CHAT_ID;
const sourceThreadId = process.env.SOURCE_THREAD_ID;
const targetThreadId = process.env.TARGET_THREAD_ID;

if (!botToken || !sourceChatId || !targetChatId) {
  throw new Error(
    "Please set BOT_TOKEN, SOURCE_CHAT_ID, and TARGET_CHAT_ID in your .env file",
  );
}

const bot = new Telegraf(botToken);

const toNum = (str: string | undefined) => (str ? Number(str) : undefined);

bot.on("message", async (ctx) => {
  const senderChatId = ctx.chat?.id.toString();

  const isFrom = {
    source: senderChatId === sourceChatId,
    target: senderChatId === targetChatId,
  };

  const messageThreadId = ctx.update.message.message_thread_id?.toString();

  if (!shouldEcho(isFrom, messageThreadId)) return;

  const forwardToChatId = isFrom.source ? targetChatId : sourceChatId;
  const forwardToThreadId = isFrom.source
    ? toNum(targetThreadId)
    : toNum(sourceThreadId);

  await ctx.telegram.forwardMessage(
    forwardToChatId,
    senderChatId,
    ctx.message.message_id,
    { message_thread_id: forwardToThreadId },
  );
});

console.log("~~~ EchoBot ~~~");
bot.launch().catch((error) => {
  console.log("Failed to connect bot to Telegram: " + error);
});

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
