import React from 'react';
import { useDispatch } from 'react-redux'; 

import './style.css';


import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/action';


function Login(){

    const dispatch = useDispatch();
    
    React.useEffect(() => {
        async function getData(){
            const response = await axios.get('https://swapi.dev/api/people/2');
            const {data} = response;
            console.log(data);
        }

        getData();

    },[]);

    function handleClick(e){
        e.preventDefault();
       
        dispatch(exampleActions.clicaBotao());
    }

    return(
        <div className="container">
            <h1>Hello</h1>
            <small>Ooiie</small>
        <p>Lorem ipsum dor sit emet</p>
        <button type="button" onClick={handleClick}>Enviar</button>
    </div>
    
    );
}

export default Login;