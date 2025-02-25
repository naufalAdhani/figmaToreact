import React from "react";

const StoryBar = () => {
  return (
    <div className="story-bar">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="story"></div>
      ))}
    </div>
  );
};

export default StoryBar;