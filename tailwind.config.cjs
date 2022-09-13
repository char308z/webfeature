/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      fontFamily:{
        display: 'aktiv-grotesk-extended'
      },
      colors:{
        pink:'#F20FB6',
        green:'#76D930'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
