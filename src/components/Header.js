import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="">
      <div className="">
        <nav>
          <ul className="navList">
            <li className="nav_li">
              <a href="#">Industries</a>
            </li>
            <li className="nav_li">
              <a href="#">Services</a>
            </li>
            <li className="nav_li">
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
