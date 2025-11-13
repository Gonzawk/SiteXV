/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#F3B1C8",
          dark: "#0E0E0E",
        },
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(0.95)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(243,177,200,0.25)",
      },
    },
  },
  plugins: [],
};
