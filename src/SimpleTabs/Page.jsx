import React from "react";

import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";
import Tabs from "./Tabs";

export default function Page() {
  const tabData = [
    {
      label: "Login",
      content: <LoginForm />
    },
    {
      label: "Signup",
      content: <SignupForm />
    }
  ];

  return (
    <div style={{ maxWidth: "300px" }}>
      <h1>Simple Tabs</h1>
      <Tabs data={tabData} />
    </div>
  );
}
