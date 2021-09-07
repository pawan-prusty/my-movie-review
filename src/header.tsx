import React from "react";
import { Link } from "react-router-dom";
import "./Styles/header.css";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
function Header() {
  return (
    <div className="header">
      <div className="Logo">
        <span className="glow">Movie review</span>
      </div>
      <div className="search-box-wrapper">
        <div>
          <button className="search-button">
            {" "}
            <IconContext.Provider value={{ size: "20px" }}>
              <BsSearch />
            </IconContext.Provider>
          </button>
        </div>
        <input
          type="text"
          className="search-box"
          placeholder="Search movies, TV,actors and more...."
        />
      </div>
      <ul className="navbar">
        <li>
          {" "}
          <Link className="links" to="/">
            Home{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="links" to="/">
            About{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="links" to="/">
            Contact{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="links" to="/blog">
            Blogs{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
