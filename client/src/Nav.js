import React, { useState } from 'react';
import DarkMode from './DarkMode';

const Nav = () => {
  
  const [darkMode, setDarkMode] = DarkMode(false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <div className="navbar">

      <div className="dark-mode__toggle" id="mode">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          > Click
          </button>
          </div>
    </div>
  );
};
export default Nav;
