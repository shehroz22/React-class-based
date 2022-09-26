import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <Link className="navbar-brand" to="/About">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/AboutnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/business">
                  Business{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  {" "}
                  Entertainment{" "}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  {" "}
                  Health{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  {" "}
                  Science{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  {" "}
                  Sports{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  {" "}
                  Technology{" "}
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button
              style={{ margin: "22px" }}
              className="btn btn-outline-dark my-4 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
