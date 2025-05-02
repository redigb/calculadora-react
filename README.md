# Calculadora

Una calculadora funcional construida con React, diseñada para cálculos básicos y avanzados con una interfaz intuitiva.

## Características

- **Operaciones Básicas**: Realiza sumas, restas, multiplicaciones y divisiones de manera fluida.
- **Funciones Avanzadas**: Calcula porcentajes (%), raíces cuadradas (√) y usa paréntesis para expresiones complejas.
- **Gestión de Memoria**: Suma (M+) o resta (M-) valores a la memoria, recupera (MR) o borra (MC).
- **Historial**: Muestra los últimos 3 cálculos para referencia rápida.
- **Interacción con Teclado**: Usa teclas numéricas (0-9), operadores (+, -, *, /), Enter (=), Retroceso (⌫) y Escape (C) para operar sin mouse.
- **Borrado Flexible**: Borra todo con C o elimina el último carácter con ⌫.

## Requisitos Previos

- Node.js (versión 16 o superior) y npm instalados.
- Un navegador web moderno (Chrome, Firefox, Edge, etc.).

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/redigb/calculadora-react.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd calculadora-react
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador en la URL proporcionada, generalmente:
   ```
   http://localhost:5173
   ```

## Uso

- **Clic en Botones**: Haz clic en los números y operadores para realizar cálculos.
- **Controles de Teclado**:
  - Números: `0-9`
  - Operadores: `+`, `-`, `*`, `/`
  - Igual: `Enter`
  - Borrar último carácter: `Backspace`
  - Reiniciar: `Escape`
  - Funciones especiales: `%`, `√`, `(`, `)`, `M+`, `M-`, `MR`, `MC`
- **Funciones Especiales**:
  - `C`: Reinicia la calculadora.
  - `⌫`: Borra el último carácter.
  - `%` y `√`: Para cálculos avanzados.
  - Paréntesis: Para expresiones complejas.
  - Memoria: Almacena y recupera valores.


## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- Inicia el servidor de desarrollo:
  ```bash
  npm run dev
  ```
- Construye la aplicación para producción:
  ```bash
  npm run build
  ```
- Previsualiza la versión de producción:
  ```bash
  npm run preview
  ```

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida y moderna.
- **CSS**: Estilización de la interfaz.
- **JavaScript**: Lógica de cálculos y manejo de estado.

## Solución de Problemas

- **Error al instalar dependencias**: Asegúrate de tener Node.js actualizado y ejecuta `npm install` nuevamente.
- **El servidor no inicia**: Verifica que el puerto `5173` esté libre o cambia el puerto en `vite.config.js`.
- **Problemas con el teclado**: Asegúrate de que el foco esté en la calculadora al usar las teclas.

## Colaboradores

- Shakira-leo
- Zarai Ramirez Vega
- Renzo RD
- YasserCBF

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.
