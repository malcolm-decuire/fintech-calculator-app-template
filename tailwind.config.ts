import type { Config } from 'tailwindcss';

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      height: {
        unset: 'unset',
      },
      colors: {
        black: {
          500: '#000000',
        },
        white: {
          500: '#ffffff',
        },
        green: {
          500: '#5E801E'
        },
        grey: {
          400: '#f7f7f7',
          500: '#1b1b1f',
        },
        yellow: {
          500: '#ffcc02'
        },
      },
      width: {
        'calc-1/2-4': 'calc(50% - 12px)',    
      },
      maxWidth: {
        '100vw-32px': 'calc(100vw - 32px)'
      },
      spacing: {
        '1': '6px',
        '2': '8px',
        '3': '10px',
        '5': '14px',
        '6': '16px',
        '7': '20px',
        '8': '24px',
        '9': '30px',
        '10': '40px',
        '60': '60px',
      },
    },
  },
  plugins: [],
};
export default config;
