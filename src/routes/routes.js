import React from 'react';
import {Switch,Route} from 'react-router-dom';


import Page404 from '../pages/page404/page404';
import Personagem from '../pages/Personagens';

function Routes(){
    return (
        <Switch>
        <Route  exact path= "/" component={Personagem} />
        <Route path= "*" component={Page404} />
        </ Switch>
    );
};


export default Routes;