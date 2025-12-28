/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'marquee-scroll': 'marquee-scroll 90s linear infinite',
      },
      keyframes: {
        'marquee-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        50: "12.5rem",
        55: "13.75rem",
        70: "17.5rem",
        80: "20rem",
        100: "25rem",
        140: "35rem",
        150: "37.5rem",
        180: "45rem",
        240: "60rem",
        300: "75rem",
      },
    }
  },
  plugins: [],
}

