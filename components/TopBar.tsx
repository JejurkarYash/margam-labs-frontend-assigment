"use client";

import { Sun, Moon, Search, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const TopBar = ({
  activeItem,
  setSearch,
}: {
  activeItem: string;
  setSearch: (search: string) => void;
}) => {
  const { theme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  // Fire custom event so ThemeContainer ripple works
  const handleThemeToggle = (e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent("theme-toggle", {
        detail: { x: e.clientX, y: e.clientY },
      })
    );
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        h-16 w-full flex items-center justify-between
        px-4 sm:px-6
        border-b border-zinc-200 dark:border-zinc-800
        bg-white dark:bg-black shadow-sm
        sticky top-0 z-40
      "
    >
      {/* LEFT — PAGE TITLE */}
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-white truncate">
        {activeItem}
      </h2>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* MOBILE SEARCH ICON */}
        <button
          onClick={() => setSearchOpen(true)}
          className="sm:hidden p-2 rounded-md bg-zinc-100 dark:bg-zinc-800"
        >
          <Search size={16} className="text-zinc-600 dark:text-zinc-300" />
        </button>

        {/* DESKTOP SEARCH BAR */}
        <div
          className="
            hidden sm:flex items-center
            bg-zinc-100 dark:bg-zinc-900
            border border-zinc-300 dark:border-zinc-700
            rounded-lg px-3 py-1.5
            w-56 md:w-72
          "
        >
          <Search size={16} className="text-zinc-500 dark:text-zinc-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="bg-transparent outline-none ml-2 text-sm text-zinc-800 dark:text-white w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* THEME TOGGLE — now fires ripple event */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={handleThemeToggle}
          className="
            flex items-center justify-center
            h-9 w-9 sm:h-10 sm:w-10
            rounded-full border
            border-zinc-300 dark:border-zinc-700
            bg-white dark:bg-zinc-900
            hover:bg-zinc-100 dark:hover:bg-zinc-800
            transition shadow-sm relative
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "dark" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Sun size={18} className="text-yellow-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <Moon size={18} className="text-zinc-700 dark:text-zinc-200" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* USER AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="
            h-8 w-8 sm:h-9 sm:w-9
            rounded-full bg-zinc-300 dark:bg-zinc-700
            flex items-center justify-center
            text-xs sm:text-sm font-medium
            text-zinc-700 dark:text-zinc-200
            cursor-pointer
          "
        >
          U
        </motion.div>
      </div>

      {/* MOBILE SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              absolute top-0 left-0 w-full h-16
              bg-white dark:bg-black
              flex items-center px-4 gap-3
              border-b border-zinc-300 dark:border-zinc-800
              z-50
            "
          >
            <Search size={16} className="text-zinc-400 shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-zinc-800 dark:text-white text-sm"
            />
            <button onClick={() => setSearchOpen(false)}>
              <X size={20} className="text-zinc-600 dark:text-zinc-300" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default TopBar;