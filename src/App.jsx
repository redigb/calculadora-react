import { useState } from 'react'
import useCalculadora from './utilis/Calculadora';

function App() {

  const {
    pantalla,
    agregarNumero,
    seleccionarOperacion,
    calcularResultado,
    borrarPantalla,
  } = useCalculadora(); // Usamos el hook

  return (
    <div className="calculadora">
    {/* Pantalla */}
    <div className="pantalla">
      <input type="text" value={pantalla} disabled />
    </div>

    {/* Botones de números */}
    <div className="botones">
      <button onClick={() => agregarNumero("1")}>1</button>
      <button onClick={() => agregarNumero("2")}>2</button>
      <button onClick={() => agregarNumero("3")}>3</button>
      <button onClick={() => agregarNumero("4")}>4</button>
      <button onClick={() => agregarNumero("5")}>5</button>
      <button onClick={() => agregarNumero("6")}>6</button>
      <button onClick={() => agregarNumero("7")}>7</button>
      <button onClick={() => agregarNumero("8")}>8</button>
      <button onClick={() => agregarNumero("9")}>9</button>
      <button onClick={() => agregarNumero("0")}>0</button>
    </div>

    {/* Operaciones */}
    <div className="operaciones">
      <button onClick={() => seleccionarOperacion("+")}>+</button>
      <button onClick={() => seleccionarOperacion("-")}>-</button>
      <button onClick={() => seleccionarOperacion("*")}>*</button>
      <button onClick={() => seleccionarOperacion("/")}>/</button>
      <button onClick={calcularResultado}>=</button>
    </div>

    {/* Botones adicionales */}
    <div className="acciones">
      <button onClick={borrarPantalla}>C</button>
    </div>
  </div>
  )
}

export default App;
