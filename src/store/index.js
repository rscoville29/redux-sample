import { createStore, applyMiddleware } from "redux";
import myReducer from "./reducer";
import thunk from 'redux-thunk'


//applying middleware for the use of thunks
const store = createStore(myReducer, applyMiddleware(thunk));

export default store;