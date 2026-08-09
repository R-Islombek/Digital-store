import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <a href="#" className="header__logo">
            <span className="header__logo-icon">&gt;_</span>
            <span className="header__logo-text">Digital Store</span>
          </a>

          <div className="header__search">
            <input
              type="text"
              className="header__search-input"
              placeholder="Pesquisar produto..."
            />
            <button className="header__search-btn" aria-label="Qidirish">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#9aa0a6" strokeWidth="2" />
                <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="#9aa0a6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="header__actions">
            <a href="#" className="header__signup">Cadastre-se</a>

            <button className="header__login-btn">Entrar</button>

            <a href="#" className="header__cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3H5L5.4 5M5.4 5H21L18 13H7M5.4 5L7 13M7 13L5.6 15.6C5.2 16.4 5.8 17.4 6.7 17.4H18M18 17.4C16.9 17.4 16 18.3 16 19.4C16 20.5 16.9 21.4 18 21.4C19.1 21.4 20 20.5 20 19.4C20 18.3 19.1 17.4 18 17.4ZM9 19.4C9 20.5 8.1 21.4 7 21.4C5.9 21.4 5 20.5 5 19.4C5 18.3 5.9 17.4 7 17.4C8.1 17.4 9 18.3 9 19.4Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
