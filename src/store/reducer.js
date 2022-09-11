//actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';

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

const addNumber = (number)=>{
    return {
        type: ADD,
        number
    }
}

const subtractNumber = (number) =>{
    return {
        type: SUBTRACT,
        number
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

export const addNumberThunk = (number)=>{
    return async (dispatch) =>{
        try {
            dispatch(addNumber(number));
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const subtractNumberThunk = (number)=>{
    return async (dispatch) =>{
        try {
            dispatch(subtractNumber(number));
        
        } catch (error) {
            console.log(error);
        }
    }
}


//reducer

const initialState = {counter: 0};
export default function myReducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {counter: state.counter + 1};
            case DECREMENT:
                return {counter:state.counter - 1};
                case ADD:
                    return {counter: state.counter + action.number};
                    case SUBTRACT:
                        return {counter: state.counter - action.number}
        default:
            return state;
    }
}