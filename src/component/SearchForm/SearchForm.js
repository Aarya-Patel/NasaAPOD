import React from "react";
import "./SearchFormStyles.css";

const SeachForm = ({ getApiData }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const dateParam = document.querySelector("input").value;
        getApiData(dateParam);
      }}
    >
      <input type="text" placeholder="Enter a date in YYYY-MM-DD format" />
      <button type="submit" value="Search">
        Search
      </button>
    </form>
  );
};

export default SeachForm;
