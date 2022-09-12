import React from 'react';
import MessagesStore from '../features/MessagesStore';
import Message from './Message';

const Chat = () => {
	const { messages, deleteMessage } = MessagesStore();

	React.useEffect(() => {
		const interval = setInterval(() => {
			deleteMessage();
		}, 5500);

		return () => clearInterval(interval);
	}, [messages]);

	return (
		<div className='chat p-4 flex flex-col gap-4 items-end justify-end'>
			{messages.map(({ id, message }) => (
				<Message key={id} message={message} />
			))}
		</div>
	);
};

export default Chat;
