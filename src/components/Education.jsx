import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
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
      <motion.h2 className="my-20 text-center text-4xl" variants={itemVariants}>
        Education
      </motion.h2>

      {/* Experience List */}
      <div>
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariants}
            whileHover="hover"
          >
            {/* Year */}
            <motion.div className="w-full lg:w-1/4" variants={itemVariants}>
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>

            {/* Role, Company, Description */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={hoverVariants}
            >
              <h6 className="mb-2 font-semibold">
                {education.course} -{" "}
                <span className="text-sm text-purple-100">
                  {education.college}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
              {education.tech.map((tech, index) => (
                <span
                  key={index}
                  className=" mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
