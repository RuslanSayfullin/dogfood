import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/app';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './storage/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App/>
    </ HashRouter>
)

