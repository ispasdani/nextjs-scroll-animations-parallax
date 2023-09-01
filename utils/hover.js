"use client";

import { useState, useEffect } from "react";

export default function hover3d(ref, { x = 0, y = 0, z = 0 }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = ref?.current;
    const { clientX, clientY } = e;

    x = (clientX - width / 2) / width;
    y = (clientY - height / 2) / height;

    setCoords({ x, y });
  };

  const setMouseEnter = () => {
    setIsHovering(true);
  };

  const setMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const { current } = ref;

    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", setMouseEnter);
    current.addEventListener("mouseleave", setMouseLeave);

    return () => {
      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseenter", setMouseEnter);
      current.addEventListener("mouseleave", setMouseLeave);
    };
  }, [ref]);

  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "none" : "all 0.5s ease";

  return { transform, transition };
}
