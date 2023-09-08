"use client";

import style from "./styles.module.css";
import React, { useRef } from "react";
import hover3d from "../../utils/hover";
import Image from "next/image";

function ZoomSection() {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = hover3d(hero, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = hover3d(hero, {
    x: -40,
    y: -20,
    z: -7,
  });
  return (
    <div ref={hero} className={style.zoomStyled}>
      <div
        className={style.image}
        style={{
          height: "50rem",
          width: "100%",
        }}
      >
        <Image
          src="/images/spiral.svg"
          alt="bulb tree"
          fill
          sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 34vw,
          22vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover.transform,
            scale: 1.2,
            background: "var(--color-bg)",
          }}
        />

        <Image
          src="/images/arm2.jpg"
          alt="bulb tree"
          className={style.monkey}
          width={400}
          height={400}
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            transform: hover2.transform,
            transition: hover2.transition,
          }}
        />

        <Image
          src="/images/arm.jpg"
          alt="bulb tree"
          className={style.smoke}
          width={400}
          height={400}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover3.transform,
            transition: hover3.transition,
          }}
        />
      </div>
    </div>
  );
}

export default ZoomSection;
