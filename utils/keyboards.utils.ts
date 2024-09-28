import { Keyboard } from "grammy";
import { MyContext } from "../types";

const menuKeyboard = new Keyboard()
	.text("Invoice to Contract")
	.text("Contract to Invoice")
	.row();

const contactKeyboard = new Keyboard().requestContact(
	"☎️ Signup with phone number"
);

export const showStartMessage = async (ctx: MyContext) => {
	await ctx.reply(
		`Welcome to invoiceIT!\nTo get started, please register your mobile number.\nThis will be used to secure your account and keep your documents safe.`,
		{ reply_markup: contactKeyboard }
	);
};

export const showMenuKeyboard = async (ctx: MyContext) => {
	await ctx.reply(
		"Thank you!\nYour mobile number has been registered.\nYou’re all set to start using invoiceIT.",
		{
			reply_markup: menuKeyboard,
		}
	);
};

export const showPhoneMessage = async (ctx: MyContext) => {
	await ctx.reply(`You are not signed up, press the button bellow to signup`, {
		reply_markup: contactKeyboard,
	});
};
