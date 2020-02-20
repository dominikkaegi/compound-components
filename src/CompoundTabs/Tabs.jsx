import React, { createContext, useState, useContext, Children } from "react";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";

const TabsContext = createContext();

export function Tabs({ children }) {
  return <div className="tabs"></div>;
}

const TabContext = createContext();

export function TabList({ children }) {
  return <div className="tab-list"></div>;
}

export function Tab({ children }) {
  return <div className={"tab tab-active"}>{children}</div>;
}

export function TabPanels({ children }) {
  return <div className="tab-panels">{children}</div>;
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
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <SignupForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
