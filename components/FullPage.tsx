import React from "react";
import style from "./styles.module.css";
import Image from "next/image";

export default function FullPage() {
  return (
    <div>
      <div className={style.fullPageImage}>
        <Image
          src="/images/rover.jpg"
          className=""
          alt="monkey"
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            padding: "1.5rem",
          }}
        />
      </div>
    </div>
  );
}
