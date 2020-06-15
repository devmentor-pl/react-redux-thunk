// ./src/IP.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIP } from './actions/ip';

const IP = () => {
    const dispatch = useDispatch();
    const { ip, messages } = useSelector(state => state);

    useEffect(() => {
        dispatch(getIP());
    }, []);

    const messagesView = messages.map( item => (
        <li class={ item.type }>{ item.message }</li>
    ));

    return (
        <section>
            { messagesView.length > 0 && <ul>{ messagesView }</ul> }
            <h1>Twoje IP: { ip }</h1>
        </section>
    );
}

export default  IP;