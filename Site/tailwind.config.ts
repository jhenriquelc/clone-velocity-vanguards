import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#FAF4F2',
					100: '#FAF1ED',
					200: '#FAE4DE',
					300: '#FAD7CD',
					400: '#FABFAF',
					500: '#FA8061',
					600: '#EB5E34',
					700: '#E6572C',
					800: '#C74B26',
					900: '#A13C1D'
				}
			}
		}
	},
	plugins: [flowbitePlugin, typography, forms]
} as Config;
