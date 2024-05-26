import { useState } from "react";

function Calculator() {
    const [display, setDisplay] = useState("");

    const clickHandle = (value) => {
        if (value === '=') {
            try {
                setDisplay(eval(display));
            } catch {
                setDisplay("Error");
            }
        } else if (value === 'C') {
            setDisplay('');
        } else if (value === 'x') { // Delete last character
            setDisplay(display.slice(0, -1));
        }else {
            setDisplay(display + value);
        }
    };

    return (
        <>
            <div className="box">
                <div className="Input">
                    <input type="text" name="input" value={display} readOnly />
                </div>
                <div className="section">
                    <div className="button"><button type="button" onClick={() => clickHandle('C')}>C</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('x')}>X</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('%')}>%</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('/')}>/</button></div>
                </div>
                <div className="section">
                    <div className="button"><button type="button" onClick={() => clickHandle('7')}>7</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('8')}>8</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('9')}>9</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('*')}>*</button></div>
                </div>
                <div className="section">
                    <div className="button"><button type="button" onClick={() => clickHandle('4')}>4</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('5')}>5</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('6')}>6</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('-')}>-</button></div>
                </div>
                <div className="section">
                    <div className="button"><button type="button" onClick={() => clickHandle('1')}>1</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('2')}>2</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('3')}>3</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('+')}>+</button></div>
                </div>
                <div className="section">
                    
                    <div className="button"><button type="button" onClick={() => clickHandle('0')}>0</button></div>
                    <div className="button"><button type="button" onClick={() => clickHandle('.')}>.</button></div>
                    <div className="button" id="btn1"><button type="button" onClick={() => clickHandle('=')}>=</button></div>
                </div>
            </div>
        </>
    );
}

export default Calculator;
