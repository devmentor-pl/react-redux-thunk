// ./src/reducers/index.js
import types from './../types/counter';

const initState = { 
    counter: 0,
    logs: [],
};

// ...

const reducer = (state = initState, action) => {
    switch(action.type) {
        case types.INCREASE_COUNTER:
            const { step } = action.payload;
            return {
                ...state,
                counter: state.counter + step,
            };
        case types.SET_COUNTER:
            return {
                ...state,
                counter: action.payload.value,
            };
        case types.LOG_COUNTER:
            const { counter, logs } = state;
            return {
                ...state,
                logs: [...logs, counter],
            };
        default: 
            return state;
    }
}
// ...
export default reducer;