"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./MultiLayerParallax.styles";

function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  //0: beginning of element, 1: end of element
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  console.log("scrollYProgress", scrollYProgress);
  console.log("backgroundY", backgroundY);
  console.log("textY", textY);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        PARALLAX
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{ ...styles.imgFull, ...{ y: backgroundY } }}
      />
      <motion.div className="absolute inset-0 z-20" style={styles.imgBottom} />
    </div>
  );
}

export default MultiLayerParallax;
