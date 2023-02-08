import React from "react";

function TagsNav() {
  const Tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  return (
    <>
      <div className="maintags">
        {Tags.map((tagsi, index) => {
          return (
            <div key={index}>
              <button className="focus-btn">{tagsi}</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TagsNav;
