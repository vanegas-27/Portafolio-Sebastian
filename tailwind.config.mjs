/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary" : "#593f2f",
				"secondary" : "#a6866a",
				"veig" : "#bfb3a4",
				"black" : "#0d0d0d",
				"info" : "#f2c879",
			},
			backgroundColor: {
				"primary" : "#593f2f",
				"secondary" : "#a6866a",
				"info" : "#f2c879",
				"veig" : "#bfb3a4"
			},
			borderColor: {
				"primary" : "#593f2f",
				"secondary" : "#a6866a",
				"info" : "#f2c879",
				"veig" : "#bfb3a4"
			},
			boxShadow: {
				"primary" : "#593f2f",
				"secondary" : "#a6866a",
				"info" : "#f2c879",
				"veig" : "#bfb3a4"
			}
		},
	},
	plugins: [],
}
