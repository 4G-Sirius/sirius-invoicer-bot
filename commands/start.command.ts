import axios from "axios";
import { Bot } from "grammy";
import { MyContext } from "../types";
import { showMenuKeyboard, showStartMessage } from "../utils/keyboards.utils";

export const createStartCommand = (bot: Bot<MyContext>) => {
	bot.command("start", async (ctx) => {
		showStartMessage(ctx);
	});

	bot.on(":contact", async (ctx) => {
		const contact = ctx.message?.contact;

		await axios.post(`${process.env.API_URL}/user`, {
			phone: String(contact?.phone_number),
			name: contact?.first_name,
			telegramId: String(contact?.user_id),
		});

		showMenuKeyboard(ctx);
	});
};
