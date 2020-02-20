import React, { createContext, useState, useContext } from "react";

const ParentContext = createContext();

export const Parent = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent</h1>
      <ParentContext.Provider value={{ count, setCount }}>
        {children}
      </ParentContext.Provider>
    </div>
  );
};

export const Child = ({ children }) => {
  const { count, setCount } = useContext(ParentContext);
  return (
    <div className="child">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <div style={{ border: "1px solid black" }}>{children}</div>
    </div>
  );
};

function CustomParagraph(props) {
  const { text, children } = props;
  return <p style={{ color: "red" }}>{children}</p>;
}

function App() {
  return (
    <div>
      <CustomParagraph text={"hello world"}>
        Hello // -> becomes first child
        <span>World</span> // -> becomes second child
      </CustomParagraph>
    </div>
  );
}
