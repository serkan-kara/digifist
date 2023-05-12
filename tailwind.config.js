/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tealy: '#99C3CC',
        pinky: '#CC9999',
        purplish: "#CB99CC",
        greeny: '#BCD9B2',
        grayish: '#666666'
      },
      fontFamily: {
        itcbk: ["ITC-bk", 'sans-serif'],
        itcbold: ["ITC-bold", 'sans-serif'],
        itcdemi: ["ITC-demi", 'sans-serif'],
        itcmd: ["ITC-md", 'sans-serif'],
        avenir: ["Avenir", 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
