/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A192F",
        night: "#060b14",
        cream: "#F5F5DC",
        glow: "#3c7bff"
      },
      boxShadow: {
        glow: "0 0 30px rgba(60, 123, 255, 0.35)",
        card: "0 12px 32px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-tech": "radial-gradient(circle at 20% 20%, rgba(60, 123, 255, 0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(245, 245, 220, 0.15), transparent 30%), linear-gradient(160deg, #060b14 0%, #0A192F 70%, #0e223f 100%)"
      }
    }
  },
  plugins: []
};
