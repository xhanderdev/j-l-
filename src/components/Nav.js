import React, { useState } from 'react';
import logo from '../img/Asset 16@4x.png';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ""}`}>
      <a href='/' className="logo">
        <img src={logo} alt='logo'/>
      </a>
      
{/* -- Menu para Dispositivos Movil-Tablet  */}
      <div className="menu-icono" onClick={toggleMenu}>
        <div className="nav-movil"></div>
        <div className="nav-movil"></div>
        <div className="nav-movil"></div>
      </div>

{/* -- Menu para Navbar -  */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li><a href='/'>Home</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='/'>Domicilio</a></li>
        <li><a href='#rev'>Reservaciones</a></li>
        <li><a href='#footer'>Redes Sociales</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
