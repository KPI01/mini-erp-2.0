import type { Config } from "tailwindcss";

export default {
  content: [ "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        darkBlue: 'hsl(var(--darkBlue))',
        mediumBlue: 'hsl(var(--mediumBlue))',
        lightBlue: 'hsl(var(--lightBlue))',
        goldenYellow: 'hsl(var(--goldenYellow))',
        alertRed: 'hsl(var(--alertRed))',
        successGreen: 'hsl(var(--successGreen))',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
} satisfies Config;
