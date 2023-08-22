"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Button from "../Button/Button";

import { FaRocket, FaWallet } from "react-icons/fa";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
