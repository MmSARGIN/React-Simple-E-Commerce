import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";
import "./styles/navbar.css";

function Nav() {
  const context = useContext(BooksContext);
  const totalCart = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <div className="navbar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
          >
            Categories
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/electronics" className="dropdown-item">
                Electronics
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/jewelery" className="dropdown-item">
                Jewelery
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/clothes" className="dropdown-item">
                Clothes
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              {" "}
              <Link to="/products" className="dropdown-item">
                All Categories
              </Link>{" "}
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart ({totalCart})
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
      
    </div>
  );
}

export default Nav;
