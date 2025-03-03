import NavMobile from "./NavMobile";
import ToggleThemeBtn from "./ToggleThemeBtn";

const LINKS = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "#projects",
    label: "Projetos",
  },
  {
    href: "#about",
    label: "Sobre Mim",
  },
  {
    href: "#contact",
    label: "Contato",
  },
];

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="hidden lg:flex justify-between items-center dark:text-white ">
          <a href="/" className="font-bold text-2xl">
            gustavohenriqueps
          </a>

          <ul className="flex gap-4 ">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-medium px-4 py-2 rounded hover:bg-neutral-100 active:bg-neutral-200 dark:hover:bg-neutral-700 dark:active:bg-neutral-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <ToggleThemeBtn
              styles="px-4 py-2 rounded font-medium hover:bg-neutral-100 active:bg-neutral-200
            dark:hover:bg-neutral-700 dark:active:bg-neutral-600"
            />
            <a
              href="#projects"
              className="px-4 py-2 rounded font-medium text-white dark:text-black bg-neutral-800 hover:bg-neutral-600
              dark:bg-neutral-100 dark:hover:bg-neutral-200"
            >
              Projetos
            </a>
          </div>
        </div>

        <NavMobile links={LINKS} />
      </nav>
    </header>
  );
};

export default NavBar;
