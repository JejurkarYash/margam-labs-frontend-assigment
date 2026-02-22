"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger transition when theme changes
  useEffect(() => {
    if (mounted) {
      setSwitching(true);
      const timer = setTimeout(() => setSwitching(false), 600);
      return () => clearTimeout(timer);
    }
  }, [resolvedTheme]);

  if (!mounted)
    return <div className="min-h-screen bg-background">{children}</div>;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background WORLDSWITCH animation */}
      <AnimatePresence>
        {switching && (
          <motion.div
            key="background-transition"
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`absolute inset-0 z-0 pointer-events-none ${
              resolvedTheme === "dark" ? "bg-black" : "bg-white"
            }`}
          />
        )}
      </AnimatePresence>

      {/* REAL BG (so content never flashes) */}
      <div className="absolute inset-0 z-[-1] bg-background" />

      {/* CONTENT (never animates) */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ThemeContainer;