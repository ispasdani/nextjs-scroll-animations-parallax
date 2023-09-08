import Image from "next/image";
import style from "./styles.module.css";
import logo from "/public/logo.png";
import footer from "../../utils/footer";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

import React from "react";

function Footer() {
  return (
    <div className={style.footerStyled}>
      <div className={style.nav}>
        <div className={style.logoCon}>
          <div className={style.logo}>
            <Image src={logo} width={36} alt="logo" />
            <h2>Logo</h2>
          </div>
          <div className={style.input}>
            <input type="text" placeholder="Subscribe here..." />
            <button>&#8594;</button>
          </div>
          <p>
            Create, Sell And Collect Truly Rare Digital Artworks. Powered By
            Blockchain Technology.
          </p>
          <div className={style.socials}>
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
        <div className={style.links}>
          {footer.map((item: any, index: number) => {
            return (
              <div key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((text: any, index: number) => {
                    return (
                      <li key={index}>
                        <a href="">{text.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <p className={style.rights}>
        <a href="">©2023 The Code Dealer. All rights reserved.</a>
        <a href="">Privacy policy | Terms of service</a>
      </p>
    </div>
  );
}

export default Footer;
