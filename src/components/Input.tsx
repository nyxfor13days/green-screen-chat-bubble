import React from 'react';

const Input = () => {
	const [message, setMessage] = React.useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(message);
		setMessage('');
	};

	return (
		<div className='h-16'>
			<form
				onSubmit={handleSubmit}
				className='w-full h-full flex justify-center items-center'>
				<input
					type='text'
					placeholder='Enter your message'
					aria-placeholder='Enter your message'
					value={message}
					onChange={(event) => setMessage(event.target.value)}
				/>
				<button className='hidden' type='submit'>
					Send
				</button>
			</form>
		</div>
	);
};

export default Input;
