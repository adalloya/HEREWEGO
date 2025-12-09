import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E3A8A", // Deep Navy Blue (Trust)
                secondary: "#F59E0B", // Gold (Premium/Magic)
                accent: "#DB2777", // Disney Pink/Magenta (Playful/Conversion)
                background: "#F9FAFB", // Off-white (Clean)
                foreground: "#111827", // Dark Grey (Readability)
            },
            fontFamily: {
                montserrat: ["var(--font-montserrat)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
            },
            boxShadow: {
                'clean': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'float': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
            },
        },
    },
    plugins: [],
};
export default config;
