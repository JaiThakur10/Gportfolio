import React from "react";
import { motion } from "framer-motion";
import gaboutme from "../assets/gaboutme.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        duration: 0.5,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}
      <motion.h1 className="my-20 text-center text-4xl" variants={fadeInUp}>
        About Me
      </motion.h1>

      {/* Content */}
      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div className="w-full lg:w-1/2 lg:p-8" variants={fadeInUp}>
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl"
              src={gaboutme}
              alt="About Me"
              variants={imageVariants}
              whileHover="hover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div className="w-full lg:w-1/2" variants={fadeInUp}>
          <div className="flex justify-center lg:justify-center">
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={fadeInUp}
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
