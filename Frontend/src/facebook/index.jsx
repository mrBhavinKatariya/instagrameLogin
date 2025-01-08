import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function Indexx() {
  // const [formData, setFormData] = useState({ username: "", password: "" });
  // const [message, setMessage] = useState("");

  // const handleChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:8001/api/v1/user/login",
  //       formData
  //     );
  //     setMessage("Login successful!");
  //   } catch (error) {
  //     setMessage(error.response?.data?.message || "Login failed.");
  //   }

  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Indexx;

