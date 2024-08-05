import React from 'react';
import MenuCarta from './MenuCarta';
import Swal from 'sweetalert2';

const Menu = () => {

    const orden = (id) => {
        console.log(id, "Confirmar envio");

        Swal.fire({
            title: "Estas Seguro de Tu pedido?",
            text: "Puedes Cambiarlo!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Es lo que quiero!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Confirmado!",
                text: "Tu pedido se ha agregado.",
                icon: "success"
              });
            }
          });

    }

    return (
        <div id='menu'   className='menu-container'>
            <div className='menu-header'>
                <h3>Ven a disfrutar de nuestro Gran Carta de Comida Mediterranea!.</h3>
                <button>Orden Menu</button>
            </div>

            <div className='cards'>
                {
                    MenuCarta.map(MenuCarta => <div key={MenuCarta.id}className='menu-items'>
                        <img src={MenuCarta.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'> 
                                <p>{MenuCarta.title}<br/><br/></p>
                                <p>{MenuCarta.price}<br/><br/></p>
                            </div>
                            <h5>{MenuCarta.description}<br/><br/></h5>
                            <button className='ordenBtn' onClick={() => orden(MenuCarta.id)}>Agregar Orden</button>

                        </div>


                        <div></div>

                    </div>)

                }
            </div>

        </div>
    );
  };
  export default Menu;