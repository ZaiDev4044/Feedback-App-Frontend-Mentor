import React from "react";

//Components
import Frontcard from "./mainpage_components/Frontcard";
import Sugbox from "./mainpage_components/Sugbox";
import Comment from "./mainpage_components/Comments";
import MainPage from "./mainpage_components/MainPage";
import FeedbackInsPage from "./newfeedback_components/FeedbackInsPage";
import Roadmap from "./roadmap_components/Roadmap";
import "./App.css";

//Hooks and routers
import { useState, useEffect } from "react";
import data from "./data.json";

import { Link, Route, Routes } from "react-router-dom";
import TagsNav from "./mainpage_components/TagsNav";
import Roadmapbar from "./mainpage_components/Roadmapbar";
function App() {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/feedback" element={<FeedbackInsPage />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}
//Made by Zaid Ben Omar
export default App;
