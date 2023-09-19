/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'leaves': "url('/images/green-leaves-organic-png-file-hd.png')",
          'kissleaves': "url('/images/kisspng-leaf-green-blog-mint-leaf.png')",
          'Rectangle':"url('/images/Rectangle.png')",
          'Rectangle8':"url('/images/Rectangle8.png')",
          'footer-leaves':"url('/images/footer-leaves.png')",
          'footer-leaves-right':"url('/images/footer-leaves-right.png')"
      },
    },
    screens:{
      'sm':'640px',
      'md':'786px',
      'lg':'1024px',
      'xl':'1280px',

    }
  },
  plugins: [],
}
