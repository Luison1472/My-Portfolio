/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out forwards',
      },
      colors: {
        primary: '#48cae4',
        mainText: '#000000',
        subText: '#767676',
        accentText: '#EB5757',
        background: '#00b4d8',
      },
      fontFamily: {
        spoqa: ['SpoqaHanSansNeo-Regular'],
        spoqaMedium: ['SpoqaHanSansNeo-Medium'],
        spoqaBold: ['SpoqaHanSansNeo-Bold'],
      },
      screens: {
        ss: '480px', // 480px 이상일 때 적용
        md: '768px', // 768px 이상일 때 적용
        lg: '1300px', // 2100px 이상일 때 적용
      },
      // 사용자 정의 유틸리티 추가
      fontSize: {
        smoother: ['100%', { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }],
      },
      backfaceVisibility: { // backface-visibility 유틸리티 추가
        hidden: 'backface-visibility: hidden;',
      },
      translate: { // 3D 변환을 위한 translate 설정 추가
        '3d': 'translate3d(0, 0, 0)',
      },
    },
  },
  plugins: [require('daisyui')],
};
