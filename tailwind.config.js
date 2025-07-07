/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lilita: ['"Lilita One"', 'cursive'],
      },
    },
  },
  plugins: [],
};
