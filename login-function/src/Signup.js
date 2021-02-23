import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", {
        email: email,
        password: password,
      })
      .then(console.log(`SignUp: ${email} and ${password}`))
      .then((res) => console.log(res));
    // console.log(name, email, password);
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={(e) => register(e)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mx-2" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
