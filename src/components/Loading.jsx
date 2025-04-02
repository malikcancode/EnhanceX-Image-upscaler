import React from "react";

const Loading = () => {
  return (
    <div className="loader h-full">
      <div className="panWrapper">
        <div className="pan">
          <div className="food"></div>
          <div className="panBase"></div>
          <div className="panHandle"></div>
        </div>
        <div className="panShadow"></div>
      </div>
    </div>
  );
};

export default Loading;
