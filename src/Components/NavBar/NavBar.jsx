import React from "react";
import "./assets/Nav.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>Ecommerce</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/electronicos`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Electronicos
        </NavLink>
        <NavLink
          to={`/category/ropa`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Ropa
        </NavLink>{" "}
        <NavLink
          to={`/category/libros`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Libros
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};
export default Navbar;
