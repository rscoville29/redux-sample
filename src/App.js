import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {actions} from './store/index';

function App() {
const dispatch = useDispatch();
const [numberToAdd, setNumberToAdd] = useState('')
const [numberToSubtract, setNumberToSubtract] = useState('')
const counter = useSelector((state)=>{
return state.counter
});

useEffect(()=>{
  console.log(numberToAdd);
}, [numberToAdd]);

useEffect(()=>{
  console.log(numberToSubtract);
}, [numberToSubtract]);

const increment = ()=>{
  dispatch(actions.increment());
};

const decrement = ()=>{
dispatch(actions.decrement());
}

const handleAdd = (event)=>{
  //added preventDefault to keep page from reloading on submit and resetting the state
event.preventDefault();
dispatch(actions.addNumber(numberToAdd));
}

const handleSubtract = (event)=>{
  //added preventDefault to keep page from reloading on submit and resetting the state
event.preventDefault();
dispatch(actions.subtractNumber(numberToSubtract))
}

const handleAddChange = (event) => {
  setNumberToAdd(event.target.value)
}

const handleSubtractChange = (event) => {
  setNumberToSubtract(event.target.value)
}

  return (
    <div>
      <h1>Counter Application!</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <form onSubmit={handleAdd}>
        <label>Enter a number to add to the counter:</label>
      <input value={numberToAdd} onChange={handleAddChange} type='text'></input>
      <button>ADD</button>
      </form>
      <form onSubmit={handleSubtract}>
        <label>Enter a number to add to the counter:</label>
      <input value={numberToSubtract} onChange={handleSubtractChange} type='text'></input>
      <button>Subtract</button>
      </form>
      
    </div>
  );
}

export default App;
