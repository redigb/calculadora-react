import { useState } from 'react'
import CalculatorButtons from './components/botons'

function App() {
  
  const handleResult = (result) => {
    console.log('Result:', result);
    // Aquí puedes manejar el resultado (e.g., mostrarlo en otro lugar)
  };

  return (
    <div>
      <CalculatorButtons onResult={handleResult} />
    </div>
  );
}
export default App
