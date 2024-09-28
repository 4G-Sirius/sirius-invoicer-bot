import axios from "axios";
import { Bot } from "grammy";
import { MyContext } from "../types";

export const invoiceToContract = async (
	ctx: MyContext,
	bot: Bot<MyContext>
) => {
	ctx.reply("Great choice! Please upload the file you’d like to convert.");

	const handleDocument = async (ctx: any) => {
		const fileId = ctx.message.document.file_id;
		const fileLink = await ctx.telegram.getFileLink(fileId);
		ctx.reply("File has been sent to the API successfully.");

		try {
			const response = await axios.post(`${process.env.API_URL}/contract`, {
				fileUrl: fileLink.href,
			});
			ctx.reply("File has been sent to the API successfully.");
		} catch (error) {
			ctx.reply("Failed to send the file to the API.");
		}
	};

	// bot.on("msg:file", handleDocument);
	ctx.reply(
		"Perfect, we’re processing your document now. Our system is analyzing the content to generate your requested document. This may take a few moments."
	);
};
