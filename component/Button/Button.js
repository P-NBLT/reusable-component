import React, { useState } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ text, style, pic }) => {
  const css = `${styles.default} ${styles[style[0]]}`;
  const secondClass = style[1] ? `${css} ${styles[style[1]]} ` : css;

  //   let className = `${style.default}`;
  //   if (["small", "lg--light", "lg--dark"].includes(style)) {
  //     className = `${defaultCss} ${styles[style]}`;
  //   }
  console.log(pic);
  return (
    <button className={secondClass}>
      {pic ? (
        <img src={pic.src} style={{ widht: "20px", height: "20px" }} />
      ) : null}
      {text}
    </button>
  );
  //   return <button className={className}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
};
