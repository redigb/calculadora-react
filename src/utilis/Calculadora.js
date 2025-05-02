import { useState } from "react";


const useCalculadora = () => {

    const [pantalla, setPantalla] = useState(""); // Para acumular los números y operaciones
    const [operacion, setOperacion] = useState(null); // Operación seleccionada

    const agregarNumero = (numero) => {
        setPantalla((prev) => prev + numero);
    };

    const seleccionarOperacion = (oper) => {
        if (pantalla !== "") {
            setPantalla((prev) => prev + ` ${oper} `);
            setOperacion(oper);
        }
    };

    const calcularResultado = () => {
        try {
            // Evaluamos la expresión matemática
            const resultado = eval(pantalla);
            setPantalla(String(resultado));
        } catch (error) {
            setPantalla("Error");
        }
    };

    const borrarPantalla = () => {
        setPantalla("");
    };

    return {
        pantalla,
        agregarNumero,
        seleccionarOperacion,
        calcularResultado,
        borrarPantalla,
    };
};



export default useCalculadora;