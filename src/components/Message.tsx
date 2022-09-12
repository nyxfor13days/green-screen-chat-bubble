import React from 'react';
import { motion } from 'framer-motion';

interface MessageProps {
	message: string;
}

const Message = (props: MessageProps) => {
	const [hide, setHide] = React.useState(false);
	const { message } = props;
	const variants = {
		initial: { scale: 0, opacity: 1 },
		enter: { scale: 1, opacity: 1 },
		exit: { scale: 1, opacity: 0, transition: { duration: 0.15 } },
	};

	React.useEffect(() => {
		setTimeout(() => {
			setHide(true);
		}, 5000);
	}, []);

	return (
		<motion.div
			initial='initial'
			animate={hide ? 'exit' : 'enter'}
			variants={variants}
			className='message-container'>
			<p className='message'>{message}</p>
		</motion.div>
	);
};

export default Message;
