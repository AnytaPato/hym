import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Footer = () => {
  const history = useHistory();

  const { dispatch } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
      <div className="container-fluid">
        <h2 className="navbar-brand">H&M</h2>
          <ul className="navbar-nav mb-3 ">
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/womans"
              >
                Mujer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/kids"
              >
                Niños
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/mans"
              >
                Hombre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/search"
              >
                Buscador
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
           
          </div>
    
      </div>
    </nav>
  );
};

export default Footer;