import React from "react";
import "./Navbar.scss";

export default function NavBar() {
    return (
      <div id="navbar">
        <ul>
          <li>
            <a className="navbar_logo" href="./">
              Movie App
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    );
  }