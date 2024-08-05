
import React, { useState } from 'react';

const ReservaForm = (props) => {
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
        {/* -- Configuracion Formulario de Reserva -   */}
            <section id='rev'>
                <form onSubmit={handleSubmit}>
                <p>Diligencia el Formulario para Reservar.</p><br/>
                    <fieldset>
                        <div>
                        <label for="book-name">Nombre:</label>
                        <input id='book-name' min='nombre y apellidos' value={name} onChange={(e) => setName(e.target.value)}/>
                        
                        </div>
                        <div>
                        <label for="book-tel">Numero de Contacto:</label>
                        <input id='book-tel' min='+57' value={tel} onChange={(e) => setTel(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor='book-date'>Fecha de Reserva</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                        </div>
                        <div>
                            <label htmlFor='book-time'>Hora de Reserva</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Selecciona la Hora</option>
                                <option>12:00</option>
                                <option>12:30</option>
                                <option>13:00</option>
                                <option>13:30</option>
                                <option>14:00</option>
                                <option>14:30</option>
                                <option>15:00</option>
                                <option>15:30</option>
                                <option>16:00</option>
                                <option>16:30</option>
                                <option>17:00</option>
                                <option>17:30</option>
                                <option>18:00</option>
                                <option>18:30</option>
                                <option>19:00</option>
                                <option>19:30</option>
                                <option>20:00</option>
                                <option>20:30</option>
                                <option>21:00</option>
                                <option>21:30</option>

                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <opcion key= {availableTimes}>{availableTimes}</opcion>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guests'>Cantidad de Invitados (Max - 50)</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor='book-occasion'>Tipo de Evento</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                <option></option>
                                <option>Aniversario</option>
                                <option>Cumpleaños</option>
                                <option>Graduacion</option>
                                <option>Evento Especial</option>
                                <option>Reunion Familiar</option>
                                <option>Reunion Empresarial</option>
                            </select>
                        </div>

                        <div className='btnReceive'>
                            <input aria-label='On Click' type='submit'  value={"Reservar"}/>
                        </div>

                    </fieldset>
                </form>
            </section>

        </header>


    );
  }
  export default ReservaForm;