import './App.css';
import GifSeason from './img/gif-season.gif'
import Button from './components/Btn';
import Screen from './components/Screen'
import BtnClear from './components/BtnClear';
import DeleteBtn from './components/DeleteBtn';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  // Get user input
  const getInput = value => {
    setInput(input + value);
  };

  // Get input for operator so they can't repeat
  const getInputOperator = value => {
    if (input.toString().includes('/') || input.toString().includes('*') || input.toString().includes('-') || input.toString().includes('+')) {
      return
    } else {
      setInput(input + value);
    };
  };

  // Check if the input is not empty and then proceed to evaluate it trough mathjs and show the result on screen
  const getResult = () => {
    if (input && (input.includes('/') || input.includes('*') || input.includes('-') || input.includes('+'))) {
      setInput(evaluate(input));
    } else {
      alert('Please enter a valid operation');
    };
  };

  const deleteInput = () => {
    let newValue = input.toString().split('');
    newValue.pop();
    let newValueString = newValue.toString().replace(/,/gi, "");
    setInput(newValueString);
  };

  // Returning the App
  return (
    <div className="App">

      <div className="img__container">
        <img src={GifSeason} alt="Gif Season" className='img__container--gif' />
      </div>

      <div className="calculator__container">
        <Screen input={input} />
        <div className="calculator__container--row">
          <Button clickHandler={getInput}>7</Button>
          <Button clickHandler={getInput}>8</Button>
          <Button clickHandler={getInput}>9</Button>
          <Button clickHandler={getInputOperator}>/</Button>
        </div>
        <div className="calculator__container--row">
          <Button clickHandler={getInput}>4</Button>
          <Button clickHandler={getInput}>5</Button>
          <Button clickHandler={getInput}>6</Button>
          <Button clickHandler={getInputOperator}>*</Button>
        </div>
        <div className="calculator__container--row">
          <Button clickHandler={getInput}>1</Button>
          <Button clickHandler={getInput}>2</Button>
          <Button clickHandler={getInput}>3</Button>
          <Button clickHandler={getInputOperator}>-</Button>
        </div>
        <div className="calculator__container--row">
          <Button clickHandler={getResult}>=</Button>
          <Button clickHandler={getInput}>0</Button>
          <Button clickHandler={getInput}>.</Button>
          <Button clickHandler={getInputOperator}>+</Button>
        </div>
        <div className="calculator__container--row">
          <BtnClear clearInput={() => setInput('')}>Clear</BtnClear>
          <DeleteBtn deleteInput={deleteInput}>Del</DeleteBtn>
        </div>
      </div>
    </div>
  );
};

export default App;
