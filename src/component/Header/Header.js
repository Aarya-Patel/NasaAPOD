import React from "react";
import nasaLogo from "../../assests/nasa-logo.svg";
import "./HeaderStyles.css";

export default () => {
  return (
    <header>
      <img className="nasa-logo" src={nasaLogo} alt="nasa logo" />
      <div className="header-text">
        Search and Learn More about the Universe
      </div>
    </header>
  );
};
