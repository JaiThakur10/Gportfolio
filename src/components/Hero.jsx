import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import gport from "../assets/gport.jpeg";

const Hero = () => {
  const textContainer = {
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

  const bounceIn = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const scaleOnHover = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  const rotateOnInView = {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-35"
      variants={textContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap">
        {/* Left Section (Text Content) */}
        <motion.div className="w-full lg:w-1/2" variants={bounceIn}>
          <div className="flex-col flex items-center lg:items-start">
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              variants={rotateOnInView}
            >
              Gayatri Deshpande
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              variants={bounceIn}
            >
              Operations Specialist
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              variants={bounceIn}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>

        {/* Right Section (Image Content) */}
        <motion.div className="w-full lg:w-1/2 lg:p-8" variants={bounceIn}>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={rotateOnInView}
          >
            <motion.img
              src={gport}
              alt="Gayatri Deshpande"
              className="h-[400px] rounded-lg shadow-lg"
              whileHover="hover"
              variants={scaleOnHover}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
