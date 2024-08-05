import { Link } from 'react-router-dom';
import React from 'react';
import imgBanner from '../img/ImgBanner.jpeg';



const Header = () => {
  return (
    <header className='header'>
        <section>
          {/* -- Configuracion del Banner -   */}

            <div className='banner-img'>
              <img src={imgBanner} alt='' />
            </div>

            <div className='banner'>
               <h1>Little Lemon</h1> <br/>
               <h3>Con sede en Chicago (Illinois).</h3><br/>
               <p>Little Lemon es un restaurante mediterráneo familiar especializado en recetas tradicionales servidas con un toque moderno. Los chefs se inspiran en la cultura italiana, griega y turca,  lo que lo convierte en un lugar popular para comer a cualquier hora del día.</p>
               <Link to="/reserva"><button aria-label='On Click'>Reserva Tu Mesa</button></Link>
            </div>
        </section>

    </header>
  );
}

export default Header;