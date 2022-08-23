import React, { useState } from "react";
import styles from "./Button.module.css";

export const Button = ({ text, style }) => {
  const defaultCss = `${styles.default} ${styles[style]}`;

  let className = `${style.default}`;

  if (["small", "lg--light", "lg--dark"].includes(style)) {
    className = `${defaultCss} ${styles[style]}`;
  }

  return <button className={defaultCss}>{text}</button>;
  //   return <button className={className}>{text}</button>;
};
