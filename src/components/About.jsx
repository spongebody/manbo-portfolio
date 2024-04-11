import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 350,
        }}
        className="dark:bg-tertiary bg-ltertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>介绍</p>
        <h2 className={styles.sectionHeadText}>关于我.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 dark:text-secondary text-lsecondary text-[17px] max-w-3xl leading-[30px]"
      >
        燕山大学在读研究生，一个喜欢打篮球的程序员。
        擅长使用React和Vue进行网页开发，React Native进行移动端开发。
        精通TypeScript和JavaScript。
        熟练使用Node和python进行API开发，熟悉Express和Django框架。
        对机器学习和深度学习有一定了解，可以开发AI相关应用。
        熟练使用Git、Docker等工具以及Linux常用命令。
        平时喜欢用Notion记录生活和学习，用Anki进行知识复习，最喜欢的前端教学网站是
        <a
          className="text-blue-500 hover:underline"
          href="https://frontendmasters.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          frontendmasters
        </a>
        。
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
