/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['outfit', 'poppins'],
  
      },
      boxShadow: {
        '2xl': '0 0 5px #C1D9BF, 0 0 0 10px #f5f5f5eb',
      },
      backgroundImage: {
        
        'gradient-45': 'linear-gradient(90.72deg, #cbfdb1 13.49%, #acbff1 50.67%, #efa7ec 70.79%, #cbfdb1 100.799%)',
        'gradient-10': 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
        'gradient-7':  'linear-gradient(0deg,#0d1117,rgba(13,17,23,0) 15%),linear-gradient(180deg,#0d1117,rgba(13,17,23,0) 15%),radial-gradient(circle farthest-side at 50% 0,rgba(13,17,23,0),#0d1117), url("/dark_theme.svg")',
        'gradient-18': 'linear-gradient(90deg,#4d4d4d 0,#fff 10%,#4d4d4d 20%)'
      },

      keyframes:{
        gradientPan: {
          '0%': { backgroundPosition: "0" },
          '100%': { backgroundPosition: "200%" },

        },
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '2': '200%',
        '16': '4rem',
        '3': '300%, 300%',
        '10': 'auto, auto, auto 64px',
      },
    },
  },
  plugins: [],
}

