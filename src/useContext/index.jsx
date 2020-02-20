import React from "react";

import { Parent, Child } from "./useContext";

export default function ContextExample() {
  return (
    <div>
      <Parent>
        <Child>
          <Child />
          <Child />
        </Child>
      </Parent>
    </div>
  );
}
