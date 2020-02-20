import React from "react";
import "./styles.css";

import SimpleTabPage from "./SimpleTabs/Page";
import CompoundTabs from "./CompoundTabs/Page";

export default function App() {
  return (
    <div style={{ display: "flex" }} className="App">
      <div style={{ padding: "10px" }}>
        <SimpleTabPage />
      </div>
      <div style={{ padding: "10px" }}>
        <CompoundTabs />
      </div>
    </div>
  );
}
