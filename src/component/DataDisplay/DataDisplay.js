import React, { Fragment } from "react";
import "./DataDisplayStyles.css";

export default ({ data }) => {
  const { title, date, explanation, hdurl } = data;
  return (
    <Fragment>
      <div className="data-img-wrapper">
        <img src={hdurl} alt="api pic" />
      </div>
      <div className="data-text">
        <h1 className="data-title">{title}</h1>
        <p className="date">{date}</p>
        <p className="data-exp">{explanation}</p>
      </div>
    </Fragment>
  );
};
