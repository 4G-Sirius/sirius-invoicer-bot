async function greeting(conversation, ctx) {
	await ctx.reply("Hi there! What is your name?");
	const { message } = await conversation.wait();
	await ctx.reply(`Welcome to the chat, ${message.text}!`);
}
