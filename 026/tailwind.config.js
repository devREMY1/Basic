/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './css/*.css'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
}
