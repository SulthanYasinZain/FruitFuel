/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#070d09",
        background: "#f4faf5",
        primary: "#60f187",
        secondary: "#8ed7a1",
        accent: "#63d080",
      },
    },
  },
  plugins: [],
};
