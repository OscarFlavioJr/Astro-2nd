/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',],
	theme: {
		extend: {
			colors : {
				light: '#999999',
				dark: '#313131'
			},
			fontFamily: {
				'sans' : ['Montserrat' , 'ui-sans-serif' , 'system-ui']
			}
		},
	},
	plugins: [],
}
