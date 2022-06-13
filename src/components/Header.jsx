import { NavLink } from "react-router-dom";
import logo from "../images/logos.png";
import Bounce from "react-reveal/Bounce";
import "./header.scss";
import { useState } from "react";

export default function Header() {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <div>
            <Bounce left>
              <img src={logo} alt="logo" />
            </Bounce>
          </div>
          <nav>
            <Bounce right>
              <div
                className="burger"
                onClick={() => setBurgerActive(!burgerActive)}
              >
                <i class="fa-solid fa-bars-staggered"></i>
              </div>
              <div
                className={
                  burgerActive ? "active-menu menu-container" : "menu-container"
                }
              >
                <div
                  className="close-icon"
                  onClick={() => setBurgerActive(false)}
                >
                  <i class="fa-solid fa-x"></i>
                </div>
                <ul className="menu" onClick={() => setBurgerActive(false)}>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                  </li>
                </ul>
              </div>
            </Bounce>
          </nav>
        </div>
      </div>
    </header>
  );
}
