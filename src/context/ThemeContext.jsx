import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes = {
  green: {
    primary: 'text-emerald-600',
    primaryBg: 'bg-emerald-600',
    primaryHover: 'hover:bg-emerald-700',
    border: 'border-emerald-600',
    focusBorder: 'focus:border-emerald-600',
    accent: 'accent-emerald-600'
  },
  blue: {
    primary: 'text-blue-600',
    primaryBg: 'bg-blue-600',
    primaryHover: 'hover:bg-blue-700',
    border: 'border-blue-600',
    focusBorder: 'focus:border-blue-600',
    accent: 'accent-blue-600'
  },
  purple: {
    primary: 'text-purple-600',
    primaryBg: 'bg-purple-600',
    primaryHover: 'hover:bg-purple-700',
    border: 'border-purple-600',
    focusBorder: 'focus:border-purple-600',
    accent: 'accent-purple-600'
  },
  red: {
    primary: 'text-red-600',
    primaryBg: 'bg-red-600',
    primaryHover: 'hover:bg-red-700',
    border: 'border-red-600',
    focusBorder: 'focus:border-red-600',
    accent: 'accent-red-600'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('green');

  const theme = themes[currentTheme];

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};