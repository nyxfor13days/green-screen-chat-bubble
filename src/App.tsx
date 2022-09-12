import React from 'react';
import Chat from './components/Chat';
import Input from './components/Input';

const App: React.FC = () => {
	return (
		<div className='container h-screen'>
			<div className='flex flex-col'>
				<Chat />
				<Input />
			</div>
		</div>
	);
};

export default App;
