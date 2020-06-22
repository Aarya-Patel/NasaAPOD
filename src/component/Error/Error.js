import React from "react";
import "./ErrorStyles.css";

export default () => {
  return (
    <div className="error-container">
      <h1>Whoops</h1>
      <p>Please input a valid date or a more current date</p>
    </div>
  );
};
