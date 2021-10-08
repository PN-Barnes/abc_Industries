import React from 'react';
import '../../../styles/Header/Header.css';

export default function NavList() {
  return (
    <div className="nav-left">
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
  );
}
