import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/rootReducer';
const middleware = applyMiddleware(reduxPromise);
const theStore = middleware(createStore);
const theStoreWithMiddlewareAndReducers = theStore(reducers);


ReactDOM.render(
    <Provider store={theStoreWithMiddlewareAndReducers}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);

