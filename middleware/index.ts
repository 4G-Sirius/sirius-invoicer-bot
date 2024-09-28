import { conversations } from "@grammyjs/conversations";
import { Bot, session } from "grammy";
import { MyContext } from "../types";

export const initMiddlewares = (bot: Bot<MyContext>) => {
	bot.use(
		session({
			initial() {
				return {};
			},
		})
	);

	bot.use(conversations());
};
