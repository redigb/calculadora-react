import { useState } from 'react';

import useCalculadora from '../utilis/Calculadora';

import { Button } from './Button';

import './styleCalculadora.css'

import '../tailwin.css';

const CalculadoraView = () => {

    // Hook
    const {
        pantalla,
        historial,
        agregarNumero,
        seleccionarOperacion,
        calcularResultado,
        borrarPantalla,
        retroceso,
        porcentaje,
        raizCuadrada
    } = useCalculadora();

    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '√', '+'],
        ['C', '⌫', '%', '='],
    ];

    const handleClick = (label) => {
        if (['C', '⌫', '%', '√'].includes(label)) {
            switch (label) {
                case 'C':
                    borrarPantalla();
                    break;
                case '⌫':
                    retroceso();
                    break;
                case '%':
                    porcentaje();
                    break;
                case '√':
                    raizCuadrada();
                    break;
                default:
                    break;
            }
        } else if (['+', '-', '*', '/'].includes(label)) {
            seleccionarOperacion(label);
        } else if (label === '=') {
            calcularResultado();
        } else {
            agregarNumero(label);
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen  p-4 font-bold font-mono">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/20 max-w-[420px] w-full bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900">
                <h3 className="text-white text-2xl mb-4">Calculadora-React:</h3>
                {/* Pantalla */}
                <div className="bg-white/20 text-white text-right px-4 py-5 rounded-lg text-3xl mb-6 h-20 flex items-center justify-end shadow-inner animate-fadeIn">
                    {pantalla}
                </div>

                {/* Botones */}
                <div className="grid grid-cols-4 gap-4">
                    {buttons.flat().map((label, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(label)}
                            className={`text-white font-bold py-4 rounded-xl shadow-md transition-all duration-300 transform active:scale-95
                                ${label === 'C'
                                    ? 'bg-red-500 hover:bg-red-600 hover:scale-105'
                                    : ['+', '-', '*', '/'].includes(label)
                                        ? 'bg-yellow-500 hover:bg-yellow-600 hover:scale-105'
                                        : ['=', '⌫', '%', '√'].includes(label)
                                            ? 'bg-green-500 hover:bg-green-600 hover:scale-105'
                                            : 'bg-slate-700 hover:bg-slate-600 hover:scale-105'
                                }
                              `}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-80 h-96 bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-2xl border border-white/20 ml-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900">
                <h3 className="text-white text-xl mb-4">Historial:</h3>
                <div className="space-y-2 max-h-[350px] overflow-y-auto animate-slideIn">
                    {historial.map((item, index) => (
                        <div key={index} className="bg-white/20 text-white p-3 rounded-lg">
                            <div><strong>Operación:</strong> {item.operacion}</div>
                            <div><strong>Resultado:</strong> {item.resultado}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    );
}

export default CalculadoraView;