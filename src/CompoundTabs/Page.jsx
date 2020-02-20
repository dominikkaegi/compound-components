import React from "react";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./Tabs";

export default function Page() {
  return (
    <div style={{ maxWidth: "300px" }}>
      <h1>Compound Tabs</h1>
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
