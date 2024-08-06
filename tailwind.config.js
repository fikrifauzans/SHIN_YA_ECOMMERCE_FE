/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "36px",
        "3xl": "48px",
      },
      backgroundColor: {
        primary: "#3734A9"
      },
      textColor: {
        secondary: "#808080",
        muted: "#EBEBE4"
      }
    },
  },
  plugins: [],
};
