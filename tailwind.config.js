module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F5F7FA',
          200: '#E4E7EB',
          300: '#CBD2D9',
          400: '#9AA5B1',
          500: '#7B8794',
          600: '#616E7C',
          700: '#52606D',
          800: '#3E4C59',
          900: '#323F4B',
          1000: '#1F2933',
        },
        orange: {
          100: '#FFE8D9',
          200: '#FFD0B5',
          300: '#FFB088',
          400: '#FF9466',
          500: '#F9703E',
          600: '#F35627',
          700: '#DE3A11',
          800: '#C52707',
          900: '#AD1D07',
          1000: '#841003',
        },
      },
      height: {
        lg: '300px',
        xl: '400px',
      },
    },
  },
  variants: {
    borderStyle: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
