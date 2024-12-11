import React, { useContext } from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import { ThemeContext } from "../ThemeContext";

function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <button
        className="theme-toggle-button"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Header;
