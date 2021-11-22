import React from "react";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Header = () => {
  const toggle = () => {
    let hiddenLinks = document.getElementById("hidden-links");
    let burger = document.getElementsByClassName("burger")[0];
    let cross = document.getElementsByClassName("cross")[0];

    hiddenLinks.classList.toggle("active");
    burger.classList.toggle("open");
    cross.classList.toggle("open");
  };

  return (
    <header>
      <a href="#">
        <img src={logo} />
      </a>
      <div id="hidden-links">
        <nav>
          <ul>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>
        </nav>

        <div>
          <button className="login">Login</button>
          <button className="sign-up">Sign up</button>
        </div>
      </div>

      <span>
        <GiHamburgerMenu className="burger" size={35} onClick={toggle} />
        <ImCross className="cross" size={35} onClick={toggle} />
      </span>
    </header>
  );
};

export default Header;
