import React from 'react';

import './style.css';
import axios from '../../services/axios';


function Login(){
    
    React.useEffect(() => {
        async function getData(){
            const response = await axios.get('https://swapi.dev/api/people/2');
            const {data} = response;
            console.log(data);
        }

        getData();

    },[]);

    return(
        <div className="container">
            <h1>Hello</h1>
            <small>Ooiie</small>
        <p>Lorem ipsum dor sit emet</p>
        <button type="button">Enviar</button>
    </div>
    
    );
}

export default Login;