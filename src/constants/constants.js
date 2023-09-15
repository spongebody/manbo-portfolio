import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  sinotrans,
  opensource,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "关于",
  },
  {
    id: "work",
    title: "工作",
  },
  {
    id: "contact",
    title: "联系我",
  },
];

const services = [
  {
    title: "Web 开发",
    icon: web,
  },
  {
    title: "移动端 开发",
    icon: mobile,
  },
  {
    title: "API 开发",
    icon: backend,
  },
  {
    title: "AI 应用",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "前端工程师",
    company_name: "中国外运华南有限公司",
    icon: sinotrans,
    iconBg: "#383E56",
    date: "201907 - 202005",
    points: [
      "参与完成了公司门户网站及其后台管理系统的开发，项目成功上线 sc.y2t.com",
      "前台网站整合厦门站点。与厦门公司PM进行需求沟通，与后端进行接口联调，实现了厦门公司提供的UI设计稿以及多个查询界面",
      "后台系统基于Vue Router、Vuex实现了用户管理、角色管理、权限管理等功能，对前台门户网站进行了后端可配置化设计",
      "对Axios进行了二次封装。设计并实现前台网站公告展示、航线展示等多个可复用组件",
      "使用Jest对多个组件和工具函数进行了单元测试",
    ],
  },

  {
    title: "前端工程师",
    company_name: "Hippo4j开源项目 - 开源之夏",
    icon: opensource,
    iconBg: "#E6DEDD",
    date: "202302 - 至今",
    points: [
      "项目基于Docusaurus 和React进行开发",
      "对官网界面进行了重新设计，并使用Tailwind CSS完成响应式布局和快速开发",
      "实现网站的国际化",
      "使用Midjourney生成网站需要用的图片",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hippo4j官网优化",
    description:
      "开源之夏平台上的开源项目，对Hippo4j(4.7K star)官网进行重构优化",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "docusaurus",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/opengoofy/hippo4j/tree/develop/docs",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
