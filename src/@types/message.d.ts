export interface MessageInterface {
	id: string;
	message: string;
}

export type MessagesType = {
	messages: MessageInterface[];
	addMessage: (message: string) => void;
	deleteMessage: () => void;
};
