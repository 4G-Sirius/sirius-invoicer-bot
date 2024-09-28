import { Bot } from "grammy";
import { MyContext } from "../types";
import { createMenuItemCommands } from "./menu-items.command";
import { createStartCommand } from "./start.command";

export const createCommands = (bot: Bot<MyContext>) => {
	createStartCommand(bot);
	createMenuItemCommands(bot);
};
