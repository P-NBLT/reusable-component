import React, { useState } from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = (props) => {
  const css = `${styles.default} ${styles[props.variant[0]]}`;
  const secondClass = props.variant[1]
    ? `${css} ${styles[props.variant[1]]} `
    : css;

  //   let className = `${style.default}`;
  //   if (["small", "lg--light", "lg--dark"].includes(style)) {
  //     className = `${defaultCss} ${styles[style]}`;
  //   }

  return (
    <button
      {...props}
      className={secondClass}
      // onClick={props.onClick}
      // disabled={props.disabled}
    >
      {props.pic ? (
        <img
          src={props.pic.src}
          style={{ marginRight: "5px", idht: "20px", height: "20px" }}
        />
      ) : null}
      {props.children}
    </button>
  );
  //   return <button className={className}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
};
