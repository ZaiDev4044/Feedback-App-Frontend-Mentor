//Suggestions bar on the top of the screen
import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../App.css";
import icon1 from "../images/icons/medal.png";
import data from "../data.json";
import arrowup from "../images/icons/arrow.svg";

function Sugbox() {
  const Feedback = "button";
  const options = [
    "Most Upvotes",
    "Least upvotes",
    "Most Comments",
    "Least Comments",
  ];
  return (
    <div className="sugbox">
      <img id="icon1" src={icon1}></img>
      <h3>{data.productRequests.length} Suggestions</h3>
      <h4>Sort by:</h4>
      <div className="select-container">
        <select className="custom-select">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="select-arrow">
          <img id="arrowup" src={arrowup} alt="" />
        </span>
      </div>

      <Link to="/feedback" className="purple-button">
        + Add Feedback
      </Link>
    </div>
  );
}

export default Sugbox;
