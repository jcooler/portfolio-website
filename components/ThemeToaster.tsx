"use client";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./ThemeContext";

export default function ThemeToaster() {
  const { theme } = useTheme();

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: theme === "dark" ? "#1f2937" : "#fff",
          color: theme === "dark" ? "#f3f4f6" : "#1f2937",
          border: theme === "dark" ? "1px solid #374151" : "1px solid #e5e7eb",
        },
        success: {
          iconTheme: {
            primary: "#10b981",
            secondary: theme === "dark" ? "#1f2937" : "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: theme === "dark" ? "#1f2937" : "#fff",
          },
        },
      }}
    />
  );
}
