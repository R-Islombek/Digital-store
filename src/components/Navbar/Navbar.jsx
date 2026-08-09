import React, { useState } from 'react';
import "./Nav.css";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Produtos", href: "#" },
  { label: "Categorias", href: "#" },
  { label: "Meus Pedidos", href: "#" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav__list">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="nav__item">
              <a
                href={link.href}
                className={`nav__link ${active === link.label ? "nav__link--active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link.label);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;