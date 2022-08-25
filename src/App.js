import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import './App.css';


import Header from './components/header';
import Routes from './routes/routes';




function App() {
  return (
    <>   
    <BrowserRouter> 
    <Header />
    <Routes />
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
