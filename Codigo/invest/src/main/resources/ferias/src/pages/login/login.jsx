import React from "react";
import Cabecalho from "../../assets/cabecalho";
import "./style.css";

export default function Login() {
    return (
        <>
        <div id="container">
            <div id="imagem"> </div>

            <div id="login">

                <h1>Login</h1>

                <div id="form-container">

                <form>
                    <div className="input-container">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="senha">Senha: </label>
                        <input type="password" id="senha" name="senha" required />
                    </div>
                <button type="submit">Entrar</button>
                </form>

                </div>

             </div>


        </div>
        </>
    );
}

export function LoginForm() {
    return (
        <form>
            <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="input-container">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Entrar</button>
        </form>
    );
}