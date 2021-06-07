import { Button } from 'bootstrap';
import React from 'react';
import { Link,NavLink } from "react-router-dom";

const Navbar = () =>{
     return(
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About -Tours</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/review">Our Review</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/grocery">Grocery</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/goal">Goal-ToDo</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Link to = "/users/add" className="btn btn-primary">Add user</Link>

        </nav>
    )
}
export default Navbar