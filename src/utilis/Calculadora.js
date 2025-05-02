import { useState } from "react";


const useCalculadora = () => {

    const [pantalla, setPantalla] = useState("");
    const [operacion, setOperacion] = useState(null);
    const [historial, setHistorial] = useState([]);

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
            const resultado = eval(pantalla);
            setPantalla(String(resultado));
            setHistorial((prevHistorial) => [
                ...prevHistorial,
                { operacion: pantalla, resultado: String(resultado) }, 
              ]);
        } catch (error) {
            setPantalla("Error");
        }
    };

    const borrarPantalla = () => {
        setPantalla("");
    };


    const retroceso = () => {
        setPantalla((prev) => prev.trim().slice(0, -1));
    };

    const porcentaje = () => {
        try {
            const valor = eval(pantalla);
            setPantalla(String(valor / 100));
        } catch (error) {
            setPantalla("Error");
        }
    };

    const raizCuadrada = () => {
        try {
            const valor = eval(pantalla);
            if (valor < 0) {
                setPantalla("Error");
            } else {
                setPantalla(String(Math.sqrt(valor)));
            }
        } catch (error) {
            setPantalla("Error");
        }
    };

    return {
        pantalla,
        historial,
        agregarNumero,
        seleccionarOperacion,
        calcularResultado,
        borrarPantalla,
        retroceso,
        porcentaje,
        raizCuadrada
    };
};

export default useCalculadora;