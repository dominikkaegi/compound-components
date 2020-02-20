import React, { useState } from "react";

const Tabs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="tabs">
      <div className="tab-list">
        {data.map((item, index) => {
          const className = index === activeIndex ? "tab tab-active" : "tab";
          return (
            <div
              key={index}
              className={className}
              onClick={() => setActiveIndex(index)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="tab-panels">{data[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
