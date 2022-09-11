//actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//action creators
const increment = ()=>{
    return {
        type: INCREMENT,
    }
};

const decrement = ()=>{
    return {
        type: DECREMENT,
    }
}

//thunks
export const incrementThunk = (action)=>{
    return async (dispatch)=>{
        try {
            dispatch(increment())

            
        } catch (error) {
            console.log(error);
        }
    }
}

export const decrementThunk = (action)=>{
    return async (dispatch)=>{
        try {
            dispatch(decrement())

            
        } catch (error) {
            console.log(error);
        }
    }
}

const initialState = {counter: 0};
export default function myReducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {counter: state.counter + 1};
            case DECREMENT:
                return {counter:state.counter - 1};
        default:
            return state;
    }
}