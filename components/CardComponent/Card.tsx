"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

function Card({ title, description, image }: CardProps) {
  return (
    <div className={styles.cardStyled}>
      <div
        className={styles.image}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <p className={styles.new}>New</p>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <Image
          src={image}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}

export default Card;
