import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'
class Navbar extends Component {
  render() {
    return (
      <div className="background__navbar">
        <nav className="navbar container">
          <div className="logo">Logo</div>
          <ul className="navbar-menu">
            <li className="">
              <NavLink to="/" className="">
                Explore
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/" className="">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navbar
