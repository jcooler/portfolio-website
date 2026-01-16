"use client";
import { useEffect, useRef } from "react";

export default function DynamicTitle() {
  const originalTitle = useRef<string>("");

  useEffect(() => {
    originalTitle.current = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come back! 🙏";
      } else {
        document.title = originalTitle.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
