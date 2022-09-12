/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			fontFamily: {
				sans: ['Roboto Flex', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
