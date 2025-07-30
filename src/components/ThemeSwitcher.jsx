import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme } = useTheme();

  const themeColors = [
    { name: 'green', color: 'bg-emerald-500', label: 'Green' },
    { name: 'blue', color: 'bg-blue-500', label: 'Blue' },
    { name: 'purple', color: 'bg-purple-500', label: 'Purple' },
    { name: 'red', color: 'bg-red-500', label: 'Red' }
  ];

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-400">Theme:</span>
      <div className="flex space-x-2">
        {themeColors.map((themeColor) => (
          <motion.button
            key={themeColor.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => changeTheme(themeColor.name)}
            className={`w-6 h-6 rounded-full border-2 transition-colors ${
              currentTheme === themeColor.name
                ? 'border-white'
                : 'border-gray-600 hover:border-gray-400'
            } ${themeColor.color}`}
            title={themeColor.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;