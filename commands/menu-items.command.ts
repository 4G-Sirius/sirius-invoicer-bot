import { Bot } from "grammy";
import { MyContext } from "../types";
import { contractToInvoice } from "../utils/contract-to-invoice.utils";
import { invoiceToContract } from "../utils/invoice-to-contract.utils";

export const createMenuItemCommands = (bot: Bot<MyContext>) => {
	bot.on("message", async (ctx: MyContext) => {
		if (ctx.message?.text?.startsWith("/")) {
			await bot.handleUpdate(ctx.update);
			return;
		}

		if (ctx.message?.text === "Contract to Invoice") {
			contractToInvoice(ctx);
			return;
		}
		if (ctx.message?.text === "Invoice to Contract") {
			invoiceToContract(ctx, bot);
			return;
		}
	});
};
