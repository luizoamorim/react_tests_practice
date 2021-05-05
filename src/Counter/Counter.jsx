
import React, { useState } from 'react';
import "./Counter.css";
function Counter() {

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const handleChangeValue = (e) => {
        setInputValue(parseInt(e.target.value));
    }

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue)
    }

    const subtractToCounter = () => {
        setCounterValue(counterValue - inputValue)
    }

    return (
        <div>
            <h3 data-testid="header">My Counter</h3>
            <h2 className={`${counterValue >= 100 ? "green" : ""}${counterValue <= -100 ? "red" : ""}`} data-testid="counter">{counterValue}</h2>
            <button onClick={subtractToCounter} data-testid="subtract-btn">-</button>
            <input onChange={handleChangeValue} className="text-center" data-testid="input" type="number" value={inputValue}/>
            <button onClick={addToCounter} data-testid="add-btn">+</button>
        </div>
    );
}

export default Counter;
