import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";

const NavMobile = ({ links }: { links: { href: string; label: string }[] }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="flex justify-between dark:text-white lg:hidden">
      <a href="/" className="font-medium text-lg">
        gustavohenriqueps
      </a>

      <button onClick={toggleMenu} aria-label="Abrir menu">
        <Bars3Icon className="size-7" />
      </button>

      {openMenu && (
        <div
          className="absolute inset-0 h-screen bg-black/30"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`bg-white dark:bg-neutral-800 absolute top-0 left-0 h-screen overflow-hidden transition-width duration-200 ease-in-out ${
          openMenu ? "w-5/7 md:w-4/7" : "w-0"
        }`}
      >
        <div className="flex flex-col p-4 md:p-8">
          <div className="flex justify-between mb-4">
            <ToggleThemeBtn />
            <button onClick={toggleMenu} aria-label="Fechar menu">
              <XMarkIcon className="size-7" />
            </button>
          </div>

          <ul>
            {links.map((link) => (
              <li className="py-4" key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 border-b border-neutral-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
