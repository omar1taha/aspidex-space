import aegovPlugin from '@aegov/design-system';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/@aegov/design-system-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [aegovPlugin],
}

