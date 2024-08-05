
import React from 'react';
import ReservaForm from './ReservaForm';

const Reserva = (props) => {
    return (
        <ReservaForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>

    );
  };
  export default Reserva;