import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Social from "./Social";
import "./components.scss";
import ThemeMode from "../ThemeChanger";

export default class NavBar extends Component {
  state = { toggle: false };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <header>
        <nav>
          <a id='logo'>
            VRAJ.<b style={{ color: "#078fff" }}>SHAH</b>
          </a>
          <ul id='desktopNav'>
            <li>
              <NavLink to='/' exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to='/work'>WORK</NavLink>
            </li>
            <li>
              <NavLink to='/connect'>CONNECT</NavLink>
            </li>
            <li>
              <a id='blog' href='#'>
                BLOG
              </a>
            </li>
            <li>
              <ThemeMode />
            </li>
          </ul>
          <Social />

          <i
            className={this.state.toggle ? "hamburger cross" : "hamburger"}
            onClick={this.Toggle}
          ></i>
        </nav>
        <ul
          id='mobileNav'
          style={{ display: this.state.toggle ? "block" : "none" }}
        >
          <li>
            <NavLink to='/' exact onClick={this.Toggle}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='/work' onClick={this.Toggle}>
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink to='/connect' onClick={this.Toggle}>
              CONNECT
            </NavLink>
          </li>
          <li>
            <a href='#' id='blog' onClick={this.Toggle}>
              BLOG
            </a>
          </li>
          <li>
            <ThemeMode />
          </li>
        </ul>
      </header>
    );
  }
}
