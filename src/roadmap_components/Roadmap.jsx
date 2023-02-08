import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import data from "../data.json";
function Roadmap() {
  return (
    <>
      <div className="roadmapdiv">
        <div id="sugbx2" className="sugbox">
          <div id="textroad">
            <Link id="backe2" to="/main">
              &#x2190; Go back
            </Link>
            <h2>Roadmap</h2>
          </div>
          <Link id="butpi" to="/feedback" className="purple-button">
            + Add Feedback
          </Link>
        </div>
      </div>
      <div className="commentsboxes">
        <div style={{ lineHeight: "0.4", marginTop: "-440px" }}>
          <h3>
            Planned (
            {
              data.productRequests.filter((item) => item.status === "planned")
                .length
            }
            )
          </h3>
          <p>Released features</p>
          {data.productRequests
            .filter((item) => item.status === "planned")
            .map((info, index) => {
              return (
                <div key={index} className="planned-section">
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        position: "relative",
                        top: "20px",
                        marginRight: "20px",
                        backgroundColor: "#f49f85",
                      }}
                      id="colorroad"
                    ></div>
                    <p>Planned</p>
                  </div>
                  <h2>{info.title}</h2>
                  <p style={{ fontSize: "20px", marginTop: "40px" }}>
                    {info.description}
                  </p>
                  <div className="tagbar">
                    {info.category[0].toUpperCase() + info.category.slice(1)}
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100px",
                        height: "55px",
                        marginLeft: "0px",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px",
                      }}
                      className="Upvote"
                    >
                      <a href="#" className="anchor">
                        ^
                      </a>
                      <h4
                        style={{
                          position: "relative",
                          top: "-7px",
                          marginLeft: "15px",
                        }}
                      >
                        {info.upvotes}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div style={{ lineHeight: "0.4" }}>
          <h3>
            In-Progress (
            {
              data.productRequests.filter(
                (item) => item.status === "in-progress"
              ).length
            }
            )
          </h3>
          <p>Released features</p>
          {data.productRequests
            .filter((item) => item.status === "in-progress")
            .map((info, index) => {
              return (
                <div key={index} className="inprogress-section">
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        position: "relative",
                        top: "20px",
                        marginRight: "20px",
                        backgroundColor: "#ad1fea",
                      }}
                      id="colorroad"
                    ></div>
                    <p>Planned</p>
                  </div>
                  <h2>{info.title}</h2>
                  <p style={{ fontSize: "20px", marginTop: "40px" }}>
                    {info.description}
                  </p>
                  <div className="tagbar">
                    {info.category[0].toUpperCase() + info.category.slice(1)}
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100px",
                        height: "55px",
                        marginLeft: "0px",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px",
                      }}
                      className="Upvote"
                    >
                      <a href="#" className="anchor">
                        ^
                      </a>
                      <h4
                        style={{
                          position: "relative",
                          top: "-7px",
                          marginLeft: "15px",
                        }}
                      >
                        {info.upvotes}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div style={{ lineHeight: "0.4", marginTop:'-880px' }}>
          <h3>
            Live (
            {
              data.productRequests.filter((item) => item.status === "live")
                .length
            }
            )
          </h3>
          <p>Released features</p>
          {data.productRequests
            .filter((item) => item.status === "live")
            .map((info, index) => {
              return (
                <div key={index} className="live-section">
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        position: "relative",
                        top: "20px",
                        marginRight: "20px",
                      }}
                      id="colorroad"
                    ></div>
                    <p>Planned</p>
                  </div>
                  <h2>{info.title}</h2>
                  <p style={{ fontSize: "20px", marginTop: "40px" }}>
                    {info.description}
                  </p>
                  <div className="tagbar">
                    {info.category[0].toUpperCase() + info.category.slice(1)}
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100px",
                        height: "55px",
                        marginLeft: "0px",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "0px",
                      }}
                      className="Upvote"
                    >
                      <a href="#" className="anchor">
                        ^
                      </a>
                      <h4
                        style={{
                          position: "relative",
                          top: "-7px",
                          marginLeft: "15px",
                        }}
                      >
                        {info.upvotes}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Roadmap;
