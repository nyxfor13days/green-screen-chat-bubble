import React from 'react';

interface MessageProps {
	message: string;
}

const Message = (props: MessageProps) => {
	return (
		<div className='message-container'>
			<p className='message'>{props.message}</p>
		</div>
	);
};

export default Message;
