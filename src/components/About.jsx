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
        我是一名在读研究生，熟练web开发和移动端开发，熟练使用TypeScript和JavaScript，
        并且熟悉使用Reac、Vue等流行的前端框架。掌握Node.js、Mongodb、python等后端相关技术。
        了解机器学习和深度学习，熟练使用Git、Docker等工具以及Linux常用命令。
        我具备较强的学习能力，能够快速学习并掌握新技术，能够独立完成项目开发。
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
