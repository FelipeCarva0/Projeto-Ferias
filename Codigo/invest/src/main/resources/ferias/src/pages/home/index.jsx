import React from 'react';
import Cabecalho from '../../assets/cabecalho.jsx';
import { Link } from 'react-router-dom';

export default function Home() {

  const buttons = Array(1).fill(null);

  return (
    <>
    
    <Cabecalho />
      {buttons.map((_, index) => (
        <div key={index}>
          <h1> Botão de teste{index + 1}</h1>
          <button>Teste {index + 1}</button>
          <Link to ='/login'>Ir para o login</Link>
        </div>

        
      ))}
    </>
  );
}