import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
    </Provider>,
    document.getElementById('root'));
