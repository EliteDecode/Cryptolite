import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const getLocalStorage = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const [theme, setTheme] = useState(getLocalStorage);

  const setToStorage = () => {
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    document.documentElement.className = theme;
    setToStorage();
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const displayMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <AppContext.Provider
      value={{ showMenu, displayMenu, closeMenu, toggleTheme, theme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
