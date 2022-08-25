import React from 'react';
import {Switch} from 'react-router-dom';


import MyRoute from './MyRoute';
import Login from '../pages/login';
import Page404 from '../pages/page404/page404';

function Routes(){
    return (
        <Switch>
        <MyRoute path= "/" component={Login} isClosed />
        <MyRoute path= "*" component={Page404} />
        </ Switch>
    );
};


export default Routes;