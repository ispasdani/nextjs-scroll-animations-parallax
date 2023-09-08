"use client";

import React, { useRef } from "react";
import style from "./styles.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: number;
  height: string;
}

function HorizontalWrapper({ children, height, direction }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalWrapper;
