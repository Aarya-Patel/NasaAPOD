import React from "react";
import "./FooterStyles.css";
import logo from "../../logo.svg";

export default () => {
  return (
    <footer>
      <p>designed and developed by Aarya Patel with </p>
      <img src={logo} alt="react logo" />
    </footer>
  );
};
