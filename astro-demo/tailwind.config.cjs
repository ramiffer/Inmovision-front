/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/flowbite-preact/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwind-scrollbar')
	],
}
