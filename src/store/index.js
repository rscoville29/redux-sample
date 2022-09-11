import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState:{counter: 0},
    reducers: {
        increment (state){
            state.counter++
        },
        
         decrement(state){
            state.counter--
        },
        
         addNumber(state, action){
              state.counter += action
        },
        
         subtractNumber(state, action) {
            state.counter -= action
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});
export const actions = counterSlice.actions;

export default store;