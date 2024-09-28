"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="  min-h-screen select-none transaction-colors duration-300">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
