import React from "react";

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="header">
      <nav className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "🌞 Light Mode" : "🌚 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
