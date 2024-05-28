import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/unfluke_logo.png";
import bell from "../../assets/images/bell-icon.png";
import coin from "../../assets/images/coin-icon.jpeg";
import user from "../../assets/images/user-icon.jpg";
import menu from "../../assets/images/vector3.svg";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-top">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {/* Icon */}
        <div className="icons">
          <ul>
            <li>
              <img src={bell} alt="bell-icon" />
              <span>
                <MdOutlineArrowDropDown />
              </span>
            </li>
            <li>
              <img src={coin} alt="coin-icon" />
              <span>0</span>
            </li>
            <li>
              <img src={user} alt="user-icon" />
              <span>
                <MdOutlineArrowDropDown />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border" />
      <div className="nav-menu">
        <ul>
          <li>
            <img src={menu} alt="menu-img" />
          </li>
          <li>
            <a href="#">LeaderBoard</a>
          </li>
          <li>
            <a href="#">Historical Trading</a>
            <span>
              <MdOutlineArrowDropDown />
            </span>
          </li>
          <li>
            <a href="#">Historical Chart</a>
          </li>
          <li>
            <a href="#">Scanners</a>
          </li>
          <li>
            <a href="#">Alerts</a>
          </li>
          <li>
            <a href="#">Basic Backtest</a>
          </li>
          <li>
            <a href="#">Advanced Backtest</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">My Earnings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
