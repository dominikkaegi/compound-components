import React, { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}
    >
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" />
      <label htmlFor="email">Password</label>
      <input type="password" id="email" />
      <button className="cta" type="submit" style={{ marginTop: "10px" }}>
        {loading ? "Loading...." : "Login"}
      </button>
    </form>
  );
}
