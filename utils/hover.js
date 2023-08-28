import { useState, useEffect } from "react";

export default function hover3d(ref, { x = 0, y = 0, z = 0 }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    console.log(e);
  };

  useEffect(() => {
    const { current } = ref;

    current.addEventListener("mousemove", handleMouseMove);
  }, []);
}
