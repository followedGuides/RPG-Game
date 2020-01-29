import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/store'
import App from './App'

// Create browser history to use in the Redux store


// Get the application-wide store instance, prepopulating with state from the server where available.


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


