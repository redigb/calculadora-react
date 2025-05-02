import CalculadoraView from "./components/CalculadoraView";
import CalculatorButtons from "./components/CalculatorButtons";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './css/fondo.css'

function App() {
  return (
      <Router>
        <div className="app-container">
          {/* Encabezado con navegación */}
          <header className="main-header">
            <h1>Calculadora - con React</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Calculadora</Link> 
                </li>
                <li>
                  <Link to="/puro-css">Tailwin-Calculadora</Link> 
                </li>
              </ul>
            </nav>
          </header>
  
          {/* Contenido principal con las rutas */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<CalculatorButtons />} /> 
              <Route path="/puro-css" element={<CalculadoraView />} />
            </Routes>
          </main>
  
          {/* Pie de página */}
          <footer className="main-footer">
            <p>© 2025 - Desarrollado por [react.devs]</p>
          </footer>
        </div>
      </Router>
  )
}

export default App;
