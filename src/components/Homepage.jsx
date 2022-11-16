import React from "react";
import { Link } from "react-router-dom";
import "../style/homepage.css";
function Homepage() {
  return (
    <div className="homepg">
      <div className="home">
      <h3 className="lib">Library Management</h3>
        <div className="links">
          <img src="https://cdn.icon-icons.com/icons2/3256/PNG/96/admin_lock_padlock_icon_205891.png" alt="" />
          <Link to="/admin_login" className="btn_admin">
            Admin
          </Link>
          <img src="https://cdn.icon-icons.com/icons2/827/PNG/96/user_icon-icons.com_66546.png" alt="" />
          <Link to="/user_login" className="btn_user">
            User
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
