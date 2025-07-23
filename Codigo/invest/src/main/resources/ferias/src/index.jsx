import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home'));
const Teste = React.lazy(() => import('./pages/home/teste.jsx'));
const Arroz = React.lazy(() => import('./pages/home/arroz.jsx'));
const Login = React.lazy(() => import('./pages/login/login.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/arroz" element={<Arroz />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
        
    </React.StrictMode>,
)