import React from 'react';
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './header.css';

function Header(){

    const botaoClicado = useSelector(state => state.example.botaoClicado);

    

    return (
        <div>
            <nav>
                <Link to="/" >
                    <FaHome size={24} />
                </ Link>
                <Link to="/login">
                    <FaUserAlt size={24} />
                </ Link>

                <Link to="/sau">
                    <FaSignInAlt size={24} />
                </ Link>
                {botaoClicado ? 'Clicado' : 'Nao Clicado' }
            </nav>
        </div>
    );
}

export default Header;