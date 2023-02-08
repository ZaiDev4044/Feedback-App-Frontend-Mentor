import React from "react";
import Frontcard from "./Frontcard";
import Sugbox from "./Sugbox";
import Comment from "./Comments";
import TagsNav from "./TagsNav";
import Roadmapbar from "./Roadmapbar";

function MainPage() {
  return (
    <div className="pdv">
      <section className="CardSec">
        <Frontcard />
        <TagsNav />
        <Roadmapbar />
      </section>

      <section className="ComSec">
        <Sugbox />
        <Comment />
      </section>
    </div>
  );
}
//Note that the comments part was too buggy so i had to remove it
export default MainPage;
