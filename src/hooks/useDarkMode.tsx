import { useState, useEffect } from "react";

// Hook personalizado para gerenciar o modo escuro (dark mode).

function useDarkMode(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [darkMode, setDarkMode] = useState<boolean>(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default useDarkMode;
