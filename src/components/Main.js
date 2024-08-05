import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Reserva from './Reserva';
import ConfirmarReserva from './ConfirmarReserva';

const Main = () => {

    const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) /m;
        }
    }


    const fetchAPI = function(date){
        let result= [];
        let random = seedRandom(date.getDate());
        for (let i = 12; i <= 22; i++) {
            if (random() < 0.5) {
              result.push(`${i}:00`);
            } else {
              result.push(`${i}:30`);
            }
          }
          return result;
    };

    const submitAPI = function(formData){
        return true;
    };
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const navigate = useNavigate();
    function submitForm (formData){
        if(submitAPI(formData)){
            navigate("/Confirmar")
        }
    }

    return (
        <main className="main">
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/reserva' element={<Reserva availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path='/Confirmar' element={<ConfirmarReserva/> } />
            </Routes>
        </main>
    );
  }
  export default Main;


  