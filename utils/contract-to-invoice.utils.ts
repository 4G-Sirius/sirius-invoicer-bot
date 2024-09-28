import { MyContext } from "../types";

export const contractToInvoice = async (ctx: MyContext) => {
	ctx.reply("Great choice! Please upload the file you’d like to convert.");
	ctx.reply(
		"Perfect, we’re processing your document now. Our system is analyzing the content to generate your requested document. This may take a few moments."
	);
};
