import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        github: {
          bg: "#24292e",
          border: "#1b1f23",
          text: "#ffffff",
          button: "#2ea44f",
          buttonHover: "#22863a",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest"],
  },
};
