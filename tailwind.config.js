/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'grey': '#3d5961',
				'off-white': '#f7fdff',
			},
    },
    screens: {
			sm: { max: '450px' },
			md: { min: '451px', max: '767px' },
			lg: { min: '768px' },
		},
  },
  plugins: [],
}

