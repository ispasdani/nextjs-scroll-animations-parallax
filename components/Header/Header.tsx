"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "../Button/Button";
import { Abril_Fatface } from "next/font/google";
import hover3d from "../../utils/hover";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

import { FaRocket, FaWallet } from "react-icons/fa";
import { useRef } from "react";

const Header = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const heroImageHover = hover3d(heroRef, {
    x: 20,
    y: -4,
    z: 11,
  });

  const heroImageBoxHover = hover3d(heroRef, {
    x: 30,
    y: -40,
    z: 30,
  });

  return (
    <div className={styles.headerStyled} ref={heroRef}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} width={36} alt="Application logo" />
          <h2>Logo</h2>
        </div>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Search" />
        </div>

        <ul className={styles.navItems}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Actions</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button name="Connect Wallet" icon={<FaWallet />} />
        </ul>
      </nav>

      <div className={styles.headerContent}>
        <div className={styles.textContent}>
          <h1 className={abril.className}>
            Buy, collect and sell amazing NFT's
          </h1>
          <p>
            Aquire expertise in navigating the rapidly evolving and exhilarating
            NFT landscape, uneil the highly sought-after NFT's, and comprehend
            the possible advantages and disavantages of aquiring.
          </p>
          <div className={styles.buttons}>
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className={styles.imageContent}>
          <div
            className={styles.image}
            style={{
              transform: heroImageBoxHover.transform,
              transition: heroImageBoxHover.transition,
            }}
          >
            <Image
              src="/images/monkey.png"
              width={600}
              height={600}
              alt="Monkey Image Herobox"
              style={{
                transform: heroImageHover.transform,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
