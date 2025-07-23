import React from 'react';
import './cabecalho.css';
import logo from './logo.png';
export default function Cabecalho(){
    return(
        <div id="cabecalho">
            <img id="logo" src={logo} alt="" />
            <ul>
                <li>Inicial</li>
                <li>Quem somos</li>
                <li>Contato</li>
                <li>Sobre</li>
            </ul>
        </div>
    );
}