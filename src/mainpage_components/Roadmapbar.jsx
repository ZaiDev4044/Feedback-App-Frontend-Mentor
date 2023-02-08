import React from "react";
import { Link, Route, Routes } from "react-router-dom";
function Roadmapbar() {
  const RoadmapC = [
    {
      id: 1,
      status: "Planned",
      backgroundColor: "#f49f85",
      num: 2,
    },
    {
      id: 2,
      status: "In-Progress",
      backgroundColor: "#ad1fea",
      num: 3,
    },
    {
      id: 3,
      status: "Live",
      backgroundColor: "#62bcfa",
      num: 1,
    },
  ];

  return (
    <div className="roadmap-box">
      <section style={{ display: "flex", flexWrap: "wrap", gap: "80px" }}>
        <h3 style={{ position: "relative", bottom: "20px", color: "#3a4374" }}>
          Roadmap
        </h3>
        <Link to="/roadmap"> View</Link>
      </section>

      <section>
        {RoadmapC.map((roadi, id) => {
          return (
            <>
              <div className="statusbox" key={id}>
                <div
                  style={{ backgroundColor: roadi.backgroundColor }}
                  id="colorroad"
                ></div>
                <div>{roadi.status}</div>
                {roadi.num}
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default Roadmapbar;
