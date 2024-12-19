import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/Calendar.css";

const navbar = () => {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <span className="heading-one">Caves Infotech</span>
          </NavLink>
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

              {/* Home Link */}
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/" 
                  activeClassName="active-link"
                  end
                >
                  Home
                </NavLink>
              </li>

              {/* About Link */}
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/about" 
                  activeClassName="active-link"
                >
                  About
                </NavLink>
              </li>

              {/* Contact Us Link */}
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/contact" 
                  activeClassName="active-link"
                >
                  Contact Us
                </NavLink>
              </li>

              {/* Dropdown for Services */}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink 
                      className="dropdown-item" 
                      to="/services/it-management" 
                      activeClassName="active-link"
                    >
                      IT Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      className="dropdown-item" 
                      to="/services/web-development" 
                      activeClassName="active-link"
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      className="dropdown-item" 
                      to="/services/app-development" 
                      activeClassName="active-link"
                    >
                      App Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      className="dropdown-item" 
                      to="/services/seo" 
                      activeClassName="active-link"
                    >
                      SEO
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      className="dropdown-item" 
                      to="/services/cloud" 
                      activeClassName="active-link"
                    >
                      Cloud
                    </NavLink>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;

 
