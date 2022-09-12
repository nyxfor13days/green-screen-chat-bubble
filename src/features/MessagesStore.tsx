import create from 'zustand';
import { MessageInterface, MessagesType } from '../@types/message';
import { v4 as uuidv4 } from 'uuid';

export default create<MessagesType>((set) => ({
	messages: [],
	addMessage: (message) => {
		const newMessage = {
			id: uuidv4(),
			message: message,
		};
		set((state) => ({
			messages: [...state.messages, newMessage],
		}));
	},
	deleteMessage: () => {
		set((state) => ({
			messages: state.messages.slice(1, 2),
		}));
	},
}));
