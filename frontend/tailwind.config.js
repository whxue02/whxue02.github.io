/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        beige: '#FFF8F0',
        black: '#1E1E24',
        blue: "#1E3485",
        lightblue: "#BCC8F0",
        red: "#92140C",
        pink: "#F7A6A1",
        yellow: "#FFE66D",
        mutedyellow: "#FFCF99"
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [],
};
