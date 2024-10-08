/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./app/**/*.{ts,tsx}",
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        // Define custom colors referencing CSS variables
        colors: {
          background: {
            DEFAULT: 'hsl(var(--background))',
            dark: '#000000', // Add this line for true black
          },
          foreground: 'hsl(var(--foreground))',
  
          card: 'hsl(var(--card))',
          'card-foreground': 'hsl(var(--card-foreground))',
  
          popover: 'hsl(var(--popover))',
          'popover-foreground': 'hsl(var(--popover-foreground))',
  
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
  
          secondary: 'hsl(var(--secondary))',
          'secondary-foreground': 'hsl(var(--secondary-foreground))',
  
          muted: 'hsl(var(--muted))',
          'muted-foreground': 'hsl(var(--muted-foreground))',
  
          accent: 'hsl(var(--accent))',
          'accent-foreground': 'hsl(var(--accent-foreground))',
  
          destructive: 'hsl(var(--destructive))',
          'destructive-foreground': 'hsl(var(--destructive-foreground))',
  
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
        },
        // Existing custom animations and keyframes
        animation: {
          "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
          slide: "slide var(--speed) ease-in-out infinite alternate",
          // New animation
          "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
          marquee: "marquee 25s linear infinite",
          'marquee-reverse': 'marquee 25s linear infinite reverse',
          marquee: 'marquee 25s linear infinite',
          'marquee-reverse': 'marquee 25s linear infinite reverse',
        },
        keyframes: {
          "spin-around": {
            "0%": {
              transform: "translateZ(0) rotate(0)",
            },
            "15%, 35%": {
              transform: "translateZ(0) rotate(90deg)",
            },
            "65%, 85%": {
              transform: "translateZ(0) rotate(270deg)",
            },
            "100%": {
              transform: "translateZ(0) rotate(360deg)",
            },
          },
          slide: {
            to: {
              transform: "translate(calc(100cqw - 100%), 0)",
            },
          },
          // New keyframes
          "border-beam": {
            "100%": {
              "offset-distance": "100%",
            },
          },
          marquee: {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(calc(-100% - var(--gap)))" },
          },
          "marquee-vertical": {
            from: { transform: "translateY(0)" },
            to: { transform: "translateY(calc(-100% - var(--gap)))" },
          },
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        textShadow: {
          'soft-border': '1px 1px 1px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(0, 0, 0, 0.3), 1px -1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.3)',
        },
        dropShadow: {
          'custom': '0 41px 3px rgba(0, 0, 0, 0.0)',
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
      function ({ addUtilities }) {
        addUtilities({
          '.text-shadow-soft-border': {
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(0, 0, 0, 0.3), 1px -1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.3)',
          },
        })
      },
    ],
  }