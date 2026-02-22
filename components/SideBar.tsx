"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { icon: <Home size={18} />, label: "Dashboard" },
  { icon: <BookOpen size={18} />, label: "Courses" },
  { icon: <BarChart3 size={18} />, label: "Analytics" },
  { icon: <Settings size={18} />, label: "Settings" },
];

const SideBar = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setCollapsed(mobile); // collapsed by default on mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* BACKDROP on mobile when open */}
      <AnimatePresence>
        {isMobile && !collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCollapsed(true)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR — always visible, just wider or narrower */}
      <motion.aside
        animate={{ width: collapsed ? 60 : 260 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`
          fixed lg:static h-screen z-50
          flex flex-col border-r border-zinc-800
          overflow-hidden shrink-0
          ${theme === "light" ? "bg-black" : "bg-[#0f0f0f]"}
        `}
      >
        {/* TOP — hamburger always at top of sidebar */}
        <div className="flex items-center justify-between p-4 min-h-[60px]">
          <AnimatePresence mode="wait" initial={false}>
            {!collapsed && (
              <motion.h1
                key="full"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-xl font-semibold text-white whitespace-nowrap"
              >
                Learn<span className="text-zinc-400">AI</span>
              </motion.h1>
            )}
          </AnimatePresence>

          {/* HAMBURGER — always inside sidebar */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto rounded-lg bg-zinc-800 hover:bg-zinc-700 p-2 transition shrink-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {collapsed ? (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} className="text-zinc-300" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} className="text-zinc-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* NAVIGATION */}
        <motion.nav
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="space-y-2 flex-1 px-2 mt-2"
        >
          {navItems.map((item, idx) => (
            <NavItem
              key={idx}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.label}
              collapsed={collapsed}
              onClick={() => {
                setActiveItem(item.label);
                if (isMobile) setCollapsed(true);
              }}
            />
          ))}
        </motion.nav>
      </motion.aside>
    </>
  );
};

export default SideBar;

/* NAV ITEM */
const NavItem = ({ icon, label, active, collapsed, onClick }: any) => (
  <motion.button
    onClick={onClick}
    variants={{
      hidden: { opacity: 0, x: -10 },
      show: { opacity: 1, x: 0 },
    }}
    whileTap={{ scale: 0.97 }}
    className={`
      relative w-full flex items-center gap-3 py-2 px-3
      rounded-lg text-sm transition
      ${active ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5"}
      ${collapsed ? "justify-center" : ""}
    `}
  >
    {active && (
      <motion.div
        layoutId="activeIndicator"
        className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[4px] rounded-r-full bg-white/70"
      />
    )}

    <span className="flex text-white shrink-0">{icon}</span>

    <AnimatePresence mode="wait">
      {!collapsed && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-white whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}
    </AnimatePresence>
  </motion.button>
);