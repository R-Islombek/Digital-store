import React from 'react';
import Logo from "./images/logo.png";
import "./Header.css";
const Header = () => {
  return (
     <header className='header'>
            <div className="container">
                  <div className="header__container">
                       <a href="#"><img src={Logo} alt="" /></a>
                       
                  </div>
            </div>
     </header>
  )
}

export default Header
