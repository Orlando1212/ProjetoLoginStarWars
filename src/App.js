import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Provider} from 'react-redux';

import './App.css';


import store from './store';
import Header from './components/header';
import Routes from './routes/routes';




function App() {
  return (
    <Provider store={store}>
    <BrowserRouter> 
    <Header />
    <Routes />
    </BrowserRouter>
    <ToastContainer />
    </ Provider>
  );
}

export default App;
