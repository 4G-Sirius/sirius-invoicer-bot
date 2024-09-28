import "dotenv/config";
import { Bot } from "grammy";

import { createCommands } from "./commands/index.command";
import { initMiddlewares } from "./middleware";
import { MyContext } from "./types";
// https://api.telegram.org/bot{bot_token}/sendMessage?chat_id={chat_id}&text={notification_text}&parse_mode=markdown.
const bot = new Bot<MyContext>(process.env.TELEGRAM_BOT_TOKEN || "");

initMiddlewares(bot);

createCommands(bot);

const startBot = async () => {
	await bot.api.setMyCommands([
		{ command: "/contract_to_invoice", description: "Contract To Invoice" },
		{ command: "/invoice_to_contract", description: "Invoice To Contract" },
	]);

	bot.start();
};

startBot();
