"use client";
import styles from "./styles.module.css";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

const Button = ({ name, icon, background, color, border }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      style={{ background: background, color: color, border: border }}
    >
      {icon && icon} {name}
    </button>
  );
};

export default Button;
