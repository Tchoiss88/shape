module.exports = {
  darkMode:'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {       
    extend: {
      colors: {
        'app_white': '#fff',
        'app_light_blue': '#F2F9FA',
        'app_blue': '#8FC1F0',
        'app_dark_blue': '#093B67',
        'app_light_gray': '#DADADA',
        'app_gray': '#797979',
        'app_dark_gray': '#484848',
        'app_black': '#000',
        'app-red': '#DF0404',
      },
    },
    
  },
  
  plugins: [],
}