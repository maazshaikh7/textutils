import React from "react";
import PropTypes from "prop-types";
import "../index.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      style= {{borderBottom : "solid 2px lightblue" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/About"}>
                About-us
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch px-4">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="text-dark"
            />
            <label
              className="form-check-label"
              htmlFor="text-dark"
              style={{ color: "gray" }}
            >
              Switch mode
            </label>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="search"
              aria-label="search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// Navbar.defaultProps = {
//     title : "set title here",
//     aboutText : "about text here",
//     };
