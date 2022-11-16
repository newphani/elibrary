import React from "react";
import { useState } from "react";
import "../style/admin_login.css";
// import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
const Adminlogin = (props) => {
  // let data=props.email
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let handleSubmit = () => {
    if (email === props.data && password === "1234") {
      navigate("/admin_portal");
    } else {
      alert("invalid userName or Password");
    }
  };
  return (
    <div className="admlogin">
      <div className="admin">
        <form action="/" classname="login_form" onSubmit={handleSubmit}>
          <div className="head">
            <h1>Admin_Login</h1>
          </div>
          <div className="email">
            <label htmlFor="username or email">Username or Email</label>
            <input
              type="text"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgotpass">
            <a href="/">Forgotten Password?</a>
          </div>
          <div className="btn">
            <button>LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
