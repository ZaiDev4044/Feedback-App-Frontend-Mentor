import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import data from "../data.json";
import logopen from "../images/icons/pen.png";
function Inputbox() {
  const Tags = ["Feature", "All", "UI", "UX", "Enhancement", "Bug"];
  const Status = ["Planned", "In-Progress", "Live"];

  //   const newFeedback = {
  //     id: 1,
  //     title: document.getElementsByClassName("titlefd").value,
  //     category: document.getElementsByClassName("selectfd").value,
  //     upvotes: 0,
  //     status: document.getElementsByClassName("selectfd2").value,
  //     description: document.getElementsByClassName("txtar").value,
  //     comments: [],
  //   };

  const [newFeedback, setNewFeedback] = useState({
    id: 1,
    title: "",
    category: "",
    upvotes: 0,
    status: "",
    description: "",
    comments: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = document.getElementsByClassName("titlefd").value;
    const category = document.getElementsByClassName("selectfd").value;
    const status = document.getElementsByClassName("selectfd2").value;
    const description = document.getElementsByClassName("txtar").value;
    setNewFeedback({ ...newFeedback, title, category, status, description });
    try {
      await axios.post("data.json", newFeedback);
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="feedbackinpfield">
      <Link to="/main" id="back1">
        &#x2190; Go back
      </Link>
      <fieldset className="feedbackbox">
        <legend>
          <div className="penlogo">
            <img src={logopen} id="penlogo" />
          </div>
        </legend>
        <h1 style={{ textAlign: "center" }}>
          Edit 'One-click portofolio generation'
        </h1>
        <div className="titlesfeedback">
          <h3>Feedback Title</h3>
          <p id="opt">Add a short, descriptive headline</p>
          <input
            className="titlefd"
            placeholder="One-click portofolio generation"
            id="inp3"
            type="text"
          ></input>
        </div>
        <div className="titlesfeedback">
          <h3>Category</h3>
          <p id="opt">Choose a category for your feedback</p>
          <select className="selectfd" id="inp3">
            {Tags.map((tagsi) => {
              return <option value={tagsi}>{tagsi}</option>;
            })}
          </select>
        </div>
        <div className="titlesfeedback">
          <h3>Update Status</h3>
          <p id="opt">Change feedback state</p>
          <select className="selectfd2" id="inp3">
            {Status.map((si) => {
              return <option value={si}>{si}</option>;
            })}
          </select>
        </div>
        <div className="titlesfeedback">
          <h3>Feedback Title</h3>
          <p id="opt">Add a short, descriptive headline</p>
          <input
            placeholder="One-click portofolio generation"
            id="inp3"
            type="text"
          ></input>
        </div>
        <div className="titlesfeedback">
          <h3>Feedback Detail</h3>
          <p id="opt">
            Include any specific comments on what should be improved, added,
            etc/
          </p>
          <textarea
            className="txtar"
            id="inp3"
            placeholder="Add ability to create professional looking portofolio from profile."
          ></textarea>
        </div>
        <div className="buttonarea">
          <button id="butred" className="red-button">
            Delete
          </button>
          <button className="blue-button">Cancel</button>
          <button onClick={handleSubmit} className="purple-button">
            Save Changes
          </button>
        </div>
      </fieldset>
    </div>
  );
}

export default Inputbox;
