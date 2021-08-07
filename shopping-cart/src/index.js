import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(cartReducer);

ReactDOM.render(<Router><Provider store={store}><ScrollToTop><App /></ScrollToTop></Provider></Router>, document.getElementById('root'));

