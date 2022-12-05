import React from 'react';
import logo from './../assets/images/logo.png';
import tg from './../assets/images/tg.png';
import inst from './../assets/images/inst.png';
import twitter from './../assets/images/twitter.png';
import tiktok from './../assets/images/tiktok.png';

const Navbar = () => {
  return (
    <div className="navbar ta-c">
      <div className="navbar__row">
        <div className="navbar__logo logo ">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className="navbar__nav d-f fd-c jc-c ai-c">
          <ul>
            <li>
              <a className="navbar__link " href="#"></a>
            </li>
            <li>
              <a className="navbar__link " href="#"></a>
            </li>
            <li>
              <a className="navbar__link " href="#"></a>
            </li>
            <li>
              <a className="navbar__link " href="#"></a>
            </li>
          </ul>
        </nav>
        <ul className="navbar__soc">
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
