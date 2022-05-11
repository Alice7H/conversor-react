import React from 'react';
import './App.css';
import Conversor from './componentes/Conversor';

function App() {

  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <p>BRL = Real</p>
      <p>USD = Dólar Americano</p>
      <p>CAD = Dólar Canadense</p>
      <p>EUR = Euro</p>


      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="USD"/>
      </div>

      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="CAD"/>
      </div>

      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"/>
        <Conversor moedaA="BRL" moedaB="EUR"/>
      </div>
    </div>
  );
}

export default App;
