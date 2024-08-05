import React from 'react';
import logoFooter from '../img/Asset 20@4x.png';


const Footer = () => {
  return (
    <footer>
        <section id='footer'>
            <div className='company-info'>
            <img src={logoFooter} alt=''  />
            <p>&copy; 2024 Todos los derechos reservados.</p>
    <p>Chicago (Illinois) </p>
    <p>Teléfono: 932-5463819</p>

            </div>

        </section>
    </footer>

  );
}

export default Footer;

