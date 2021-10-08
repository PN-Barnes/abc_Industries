import React from 'react';
import ContactButton from './headerComponents/contactButton';
import SvgLogo from './headerComponents/Logo';
import NavList from './headerComponents/NavList';

const Header = () => {
  return (
    <header className="header">
      <SvgLogo />
      <ContactButton />
      <div>
        <NavList />
      </div>
    </header>
  );
};

export default Header;
