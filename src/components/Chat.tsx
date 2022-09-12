import React from 'react';
import Message from './Message';

const Chat = () => {
	const [messages, setMessages] = React.useState<string[]>(['Hello']);

	return (
		<div className='chat p-4 flex flex-col gap-4 items-end justify-end'>
			{messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</div>
	);
};

export default Chat;
