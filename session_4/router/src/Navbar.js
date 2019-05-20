import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from "antd";
import './App.css';

// Navbar file makes a navbar that can be used over and over again
class Navbar extends Component {
  render() {
    return (
    <div>
        {/* Navbar using Ant Design's navagation bar */}
        <Menu mode="horizontal">
           <Menu.Item> <Link to="/"> Home </Link> </Menu.Item>
           <Menu.Item> <Link to="/About"> About </Link> </Menu.Item>
           <Menu.Item> <Link to="/Contact"> Contact </Link> </Menu.Item>
        </Menu>

        {/* Link using HTML */}
        <a href="/" src=""> Home </a>
        
        {/* Links using Router Library */}
        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        <Link to="/Contact"> Contact </Link>
    </div>
    );
  }
}

export default Navbar;