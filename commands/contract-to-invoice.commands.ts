import { Bot } from "grammy";
import { MyContext } from "../types";
import { contractToInvoice } from "../utils/contract-to-invoice.utils";

export const createContractToInvoiceCommand = (bot: Bot<MyContext>) => {
	bot.command("contract_to_invoice", async (ctx) => {
		contractToInvoice(ctx);
	});
};
