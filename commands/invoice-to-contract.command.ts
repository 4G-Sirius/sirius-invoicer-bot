import { Bot } from "grammy";
import { MyContext } from "../types";
import { invoiceToContract } from "../utils/invoice-to-contract.utils";

export const createInvoiceToContractCommand = (bot: Bot<MyContext>) => {
	bot.command("invoice_to_contract", async (ctx) => {
		invoiceToContract(ctx, bot);
	});
};
