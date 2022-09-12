import React from 'react';
import { motion } from 'framer-motion';

interface MessageProps {
	message: string;
}

const Message = (props: MessageProps) => {
	const { message } = props;

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			className='message-container'>
			<p className='message'>{message}</p>
		</motion.div>
	);
};

export default Message;
