
import "./menu.css"
import { HamIcon } from "../Icon/HamIcon.jsx"
import { CloseIcon } from "../Icon/CloseIcon.jsx"
import { useState } from "preact/hooks";
import { MenuButton } from "./MenuButton.jsx";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div class="flex justify-between px-5 py-4 bg-primary fixed w-full z-10">
      <a href="/" class="logo text-2xl font-bold text-accent text-white">
        Gabriel Diaz
      </a>

      {/* Desktop Nav */}
      <nav class="hidden md:block">
        <ul class="flex">
          <li class="mx-2">
            <MenuButton label="About" linkTo="/#about" />
          </li>
          <li class="mx-2">
            <MenuButton label="Projects" linkTo="/#projects" />
          </li>
          <li class="mx-2">
            <MenuButton label="Blog" linkTo="/#blog" />
          </li>
          <li class="mx-2">
            <MenuButton label="Contact" linkTo="/#contact" />
          </li>
          <li class="mx-2">
            <MenuButton label="Resume" linkTo="/#resume" />
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav class={`mobile-nav ${toggle ? 'left-0' : 'left-[-100%]'}`}>
        <ul class="flex flex-col">
          <li class="mx-2">
              <MenuButton label="About" linkTo="/#about" />
          </li>
          <li class="mx-2">
            <MenuButton label="Projects" linkTo="/#projects" />
          </li>
          <li class="mx-2">
            <MenuButton label="Blog" linkTo="/#blog" />
          </li>
          <li class="mx-2">
            <MenuButton label="Contact" linkTo="/#contact" />
          </li>
          <li class="mx-2">
            <MenuButton label="Resume" linkTo="/#resume" />
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} class="block md:hidden">
        {!toggle ? (
          <HamIcon />
        ) : (
          <CloseIcon />
        )}
      </button>
    </div>
  );
};
