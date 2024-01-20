import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'red-loop': 'redLoop 10s steps(1) infinite',
        'yellow-loop': 'yellowLoop 10s steps(1) infinite',
        'green-loop': 'greenLoop 10s steps(1) infinite',
      },
      keyframes: {
        redLoop: {
          '0%, 42%': { backgroundColor: 'red' },
          '42%, 100%': { backgroundColor: 'transparent' },

        },
        yellowLoop: {
          '0%, 80%': { backgroundColor: 'transparent' },
          '80%, 100%': { backgroundColor: 'yellow' },
        },
        greenLoop: {
          '0%, 42%': { backgroundColor: 'transparent' },
          '42%, 80%': { backgroundColor: 'green' },
          '80%, 100%': { backgroundColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
