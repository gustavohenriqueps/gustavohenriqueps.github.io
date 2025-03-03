import useDarkMode from "../hooks/useDarkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const ToggleThemeBtn = ({ styles }: { styles?: string }) => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer ${styles}`}
      aria-label="Trocar tema"
    >
      {darkMode ? (
        <SunIcon className="size-7" />
      ) : (
        <MoonIcon className="size-7" />
      )}
    </button>
  );
};

export default ToggleThemeBtn;
