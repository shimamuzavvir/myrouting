import React from 'react';
import { Link } from 'react-router-dom';
import './Style/nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  mx-auto mb-2 mb-lg-0" style={{ margin: 'auto' }}>
            <li className="nav-item">
              <Link to={"/"} className="nav-link active">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/fsd"} className="nav-link">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/datascience"} className="nav-link">
                DATA SCIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/cyber"} className="nav-link">
                CYBER SECURITY
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/career"} className="nav-link">
                CAREER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

         
    );
};

export default Nav;