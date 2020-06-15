// ./src/reducers/ip.js
import types from '../types/ip';

const initState = { 
    ip: '0.0.0.0',
    messages: [],
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case types.SET_IP:
            return {
                ...state,
                ip: action.payload.ip,
            };
        case types.ADD_ERROR_IP:
            const {message, type} = action.payload;
            return {
                ...state,
                messages: [...state.messages,
                    {message: message, type: type},
                ],
            };
        default: 
            return state;
    }
}

export default reducer;