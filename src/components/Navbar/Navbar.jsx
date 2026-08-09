import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav__list">
          
          <li className="nav__item">
            <Link
              to="/"
              className={`nav__link ${active === "Home" ? "nav__link--active" : ""}`}
              onClick={() => setActive("Home")}
            >
              Home
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/produtos"
              className={`nav__link ${active === "Produtos" ? "nav__link--active" : ""}`}
              onClick={() => setActive("Produtos")}
            >
              Produtos
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/categorias"
              className={`nav__link ${active === "Categorias" ? "nav__link--active" : ""}`}
              onClick={() => setActive("Categorias")}
            >
              Categorias
            </Link>
          </li>

          <li className="nav__item">
            <Link
              to="/pedidos"
              className={`nav__link ${active === "Meus Pedidos" ? "nav__link--active" : ""}`}
              onClick={() => setActive("Meus Pedidos")}
            >
              Meus Pedidos
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;