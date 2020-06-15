// ./src/actions/ip.js
import types from './../types/ip';

const url = 'https://api.ipify.org?format=json';

export const setIP = ip => {
    return {
        type: types.SET_IP,
        payload: {
            ip: ip,
        }
    }
}

export const addError = err => {
    return {
        type: types.ADD_ERROR_IP,
        payload: {
            message: err,
            type: 'error',
        }
    }
}

export const getIP = () => (dispatch, getState) => {
    return fetch(url)
        .then( resp => {
            if(resp.ok) { return resp.json(); }
            throw new Error('Err!');
        })
        .then( resp => dispatch(setIP( resp.ip )))
        .catch( err => dispatch(addError( err )))
}