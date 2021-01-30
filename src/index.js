import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import App from './containers/App';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,

    document.getElementById('app'));