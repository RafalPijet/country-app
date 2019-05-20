import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import {Router, hashHistory} from "react-router";
import routes from './routes';
import DevTools from './utilities/DevTools';
import './country.css';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}></Router>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root'));
