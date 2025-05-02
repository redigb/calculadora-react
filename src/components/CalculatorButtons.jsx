import React, { useState, useEffect } from 'react';
import '../index.css'



const Button = ({ label, onClick, className, isDisabled }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={() => !isDisabled && onClick(label)}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

const CalculatorButtons = ({ onResult }) => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('0');
  const [pendingOperation, setPendingOperation] = useState(null);
  const [lastResult, setLastResult] = useState(null);

  const handleClick = (value) => {
    if (!isNaN(value) || value === '.') {
      setCurrentInput((prev) => {
        if (prev === '0' || prev === lastResult) return value;
        return prev + value;
      });
    } else if (value === 'C') {
      setCurrentInput('0');
      setPendingOperation(null);
      setLastResult(null);
      setHistory([]);
    } else if (value === '⌫') {
      setCurrentInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (value === '%') {
      setCurrentInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === '√') {
      setCurrentInput((prev) => Math.sqrt(parseFloat(prev)).toString());
    } else if (value === '=') {
      if (pendingOperation && lastResult !== null) {
        const result = calculate(lastResult, parseFloat(currentInput), pendingOperation);
        setCurrentInput(result.toString());
        setLastResult(result);
        setHistory([...history, `${lastResult} ${pendingOperation} ${currentInput} = ${result}`]);
        onResult(result);
      }
    } else {
      if (lastResult !== null) {
        setCurrentInput('0');
        setLastResult(null);
      }
      setPendingOperation(value);
      setLastResult(parseFloat(currentInput));
    }
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Error';
      default: return b;
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const keyActions = {
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
        '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '.': '.', '+': '+', '-': '-', '*': '*', '/': '/',
        'Enter': '=', 'Backspace': '⌫', 'Escape': 'C',
      };
      const action = keyActions[e.key];
      if (action) handleClick(action);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleClick, lastResult, currentInput, pendingOperation]);

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C', '⌫', '%', '√'],
  ];

  return (
    <div className="calculator-buttons">
      <div className="display">{currentInput}</div>
      <div className="history">
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((label, index) => (
            <Button
              key={index}
              label={label}
              onClick={handleClick}
              className={
                label === 'C' ? 'clear' :
                ['+', '-', '*', '/'].includes(label) ? 'operator' :
                ['=', '⌫', '%', '√'].includes(label) ? 'function' : ''
              }
              isDisabled={label === '=' && !pendingOperation}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalculatorButtons;