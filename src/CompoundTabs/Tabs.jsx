import React, { createContext, useState, useContext, Children } from "react";

const TabsContext = createContext();

export function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

const TabContext = createContext();

export function TabList({ children }) {
  const wrappedChildren = Children.map(children, (child, index) => {
    return <TabContext.Provider value={index}>{child}</TabContext.Provider>;
  });
  return <div className="tab-list">{wrappedChildren}</div>;
}

export function Tab({ children }) {
  const index = useContext(TabContext);
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;
  const className = "tab" + (isActive ? " tab-active" : " ");
  return (
    <div className={className} onClick={() => setActiveIndex(index)}>
      {children}
    </div>
  );
}

export function TabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);
  return <div className="tab-panels">{children[activeIndex]}</div>;
}

export function TabPanel({ children }) {
  return children;
}

export default function Page() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Logout</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Login Panel</TabPanel>
          <TabPanel>Signup Panel</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
