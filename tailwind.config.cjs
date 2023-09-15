/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

        // 明亮主题 l..
        // primary： 网站背景色
        // secondary： 网站主要字体颜色
        // tertiary: Overview卡片背景色；评价区标题区域背景色；项目展示卡片背景色；Contact 输入框背景色
        // bright-100: Contact 背景色；评价区主体背景色
        // bright-200： 评价区个人评价卡片背景色
        // nature-100： 某些区域的字体颜色
        // 工作经历区域背景色： 文件内自定义

        // 自己找的模板
        lprimary: "#00A9FF", // Website background color
        lsecondary: "#fff", // Main font color of the website
        ltertiary: "#00D4FF", // Overview card background color; Background color of evaluation area title section; Project showcase card background color;
        "bright-100": "#00E9FF", // Contact background color; Main body background color of evaluation area
        "bright-200": "#00BFFF", // Personal evaluation card background color in the evaluation area
        "nature-100": "#2E2E2C", // Font colors for certain areas.

        // gpt给的模板
        // lprimary: "#4A7DA7", // Website background color
        // lsecondary: "#6EB5C0", // Main font color of the website
        // ltertiary: "#ADD8E6", // Overview card background color; Background color of evaluation area title section; Project showcase card background color;
        // "bright-100": "#C2DDF2", // Contact background color; Main body background color of evaluation area
        // "bright-200": "#E4F3F5", // Personal evaluation card background color in the evaluation area
        // "nature-100": "#2E2E2C", // Font colors for certain areas.
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
