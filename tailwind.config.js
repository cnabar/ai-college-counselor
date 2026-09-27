/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0D0D12',
          deep: '#060609',
          surface: '#13131A',
          card: '#161622',
          border: '#232332'
        },
        champagne: {
          DEFAULT: '#C9A84C',
          light: '#E2CE90',
          dark: '#9F7E2F',
          glow: 'rgba(201, 168, 76, 0.15)'
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          muted: '#F0ECE4',
          darker: '#E5DFD3'
        },
        slate: {
          DEFAULT: '#2A2A35',
          light: '#4B4B5C',
          muted: '#8A8A9E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(201, 168, 76, 0.25)',
        'gold-soft': '0 10px 30px -10px rgba(201, 168, 76, 0.15)',
        'obsidian-card': '0 20px 50px -15px rgba(0, 0, 0, 0.6)',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
  plugins: [],
}
