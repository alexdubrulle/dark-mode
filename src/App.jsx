import React, { useState } from "react";
import chat from "./chat.svg";
import MoonImage from "./MoonImage.svg";
import SunImage from "./SunImage.svg";
import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleColors = () => {
    setIsFlipped(true);
    const logo = document.querySelector(".logo.chat");
    if (logo) {
      logo.classList.toggle("invert");
      setTimeout(() => {
        setIsFlipped(false);
      }, 2000);
    }
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <img
        src={chat}
        className={`logo chat ${isDarkMode ? "invert" : ""} ${
          isFlipped ? "flip-horizontal flip-rotate-3d" : ""
        }`}
        alt="Chat logo"
      />
      <button
        className="switch"
        onClick={() => {
          toggleTheme();
          toggleColors();
        }}
      >
        {isDarkMode ? (
          <img src={SunImage} alt="Sun" className="sun" />
        ) : (
          <img src={MoonImage} alt="Moon" className="moon" />
        )}
      </button>
    </div>
  );
}

function MainApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default MainApp;
