import axios from "axios";

export const getUser = async (
	telegramId: number
): Promise<{ phone: string; telegramId: string; name: string }> => {
	const user = await axios.get(
		`${process.env.API_URL}/telegram/user/${telegramId}`
	);
	return user.data;
};
