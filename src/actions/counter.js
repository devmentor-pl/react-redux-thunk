// ./src/actions/counter.js
import types from './../types/counter';

export const increaseCounterAction = () => {
    return {
        type: types.INCREASE_COUNTER,
        payload: {
            step: 2,
        },
    }
}

export const setCounterAction = value => {
    return {
        type: types.SET_COUNTER,
        payload: {
            value: value,
        },
    }
}

export const logCounterAction = () => {
    return {
        type: types.LOG_COUNTER,
    }
}
