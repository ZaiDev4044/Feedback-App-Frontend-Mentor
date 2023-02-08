import React, { useState, useEffect } from "react";
import data from "../data.json";
import axios from "axios";
function Comments() {
  const [commenti, setCommenti] = useState([]);

  // useEffect(() => {
  //   axios.get("/src/data.json").then((res) => setCommenti(res.data));
  // }, []);

  const [upvote, setUpvote] = useState(0);
  return (
    <div>
      {data.productRequests.map((commenti, id) => {
        return (
          <>
            <div key={id} className="commentDiv">
              <div className="Upvote">
                <a
                  onClick={() => {
                    setUpvote(commenti.upvotes + 1);
                    console.log(upvote);
                  }}
                  className="anchor"
                  href="#"
                >
                  ^
                </a>
                <p>{commenti.upvotes}</p>
              </div>
              <div className="commentText">
                <h2>{commenti.title}</h2>
                <p style={{ opacity: "60%", fontSize: "19px" }}>
                  {commenti.description}
                </p>
                <div className="tagbar">
                  {commenti.category[0].toUpperCase() +
                    commenti.category.slice(1)}
                </div>
              </div>
            </div>
            {/* <div className='commentDiv2'>     
    </div> */}
          </>
        );
      })}
    </div>
  );
}

export default Comments;
