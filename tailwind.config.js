/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        academic: {
          primary: "#064e3b", // Dark Green (Professional)
          secondary: "#f3f4f6", // Light Gray (Backgrounds)
          text: "#111827", // Almost Black (High Contrast)
          accent: "#d97706", // Muted Gold (for buttons/highlights)
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Clean & Standard
      },
    },
  },
  plugins: [],
};
