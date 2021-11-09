import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-4" to="/">
            React Formik
          </Link>
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
                <Link className="nav-link  mx-4" aria-current="page" to="/">
                  Form 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/registrationform">
                  Form 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/formvalidate">
                  Form 3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/page3">
                  Form 4
                </Link>
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link mx-2" to="/temporary">Temporary</Link>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
