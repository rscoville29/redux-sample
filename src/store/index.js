import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState:{counter: 0},
    reducers: {
        increment (state, action){
            return state.counter + 1
        },
        
         decrement(state, action){
            return state.counter - 1
        },
        
         addNumber(state, action){
            return state.counter + action.payload
        },
        
         subtractNumber(state, action) {
            return state.counter - action.payload
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});
export const actions = counterSlice.actions;

export default store;