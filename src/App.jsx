import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi"; // 引入图标库

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("isDarkMode"));
    return savedMode || false;
  }

  function handleToggleTheme() {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newMode));
    if (newMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <BrowserRouter>
      <div className={isDarkMode ? "dark" : ""}>
        <div className="fixed z-50 top-0 right-0 py-6 px-4 ">
          <button onClick={handleToggleTheme} >
            {isDarkMode ? <FiSun size="1.5rem" /> : <FiMoon size="1.5rem" />}
          </button>
          {/* 页面内容 */}
        </div>
        <div className="relative z-0 bg-lprimary dark:bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          <div className="relative z-o">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
