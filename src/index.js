// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IP from './IP';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers/ip.js';

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <IP />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
