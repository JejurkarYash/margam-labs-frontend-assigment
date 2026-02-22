import React from 'react'
import { useTheme} from "next-themes";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button 
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  )
}


export default ThemeToggleButton