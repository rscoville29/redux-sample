import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incrementThunk, decrementThunk} from './store/reducer'

function App() {
const dispatch = useDispatch();
const counter = useSelector((state)=>{
return state.counter
});

const increment = ()=>{
  dispatch(incrementThunk());
};

const decrement = ()=>{
dispatch(decrementThunk());
}

  return (
    <div>
      <h1>Counter Application!</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
