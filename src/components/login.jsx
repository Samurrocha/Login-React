import React from 'react';
import { Link } from 'react-router-dom';
import "./componentsCSS/login.css"

const Login = () => {


    return (
        <div id="container">
            <h1 id='h1'>Login</h1>

            <div className='login'>
                <label htmlFor="email" className='label'>login</label>
                <input type="email" ClasName='input' id='email' />
            </div>

            <div className='login'>
                <label htmlFor="senha" className='label'>senha</label>
                <input type="password" ClassName="input" id="senha" />
            </div>

            <div id='loginOption'>

                <div>
                    <input type="radio" name="lembrar" id="lembrar" />
                    <label htmlFor="lembrar">keep connect</label>
                </div>

                <p>esqueceu a senha? <a href="#">recupere aqui</a></p>

            </div>

            <button id='button'>Entrar</button>

            <p>
                Não tem uma conta?<Link to="/register"> crie uma</Link>
            </p>

        </div>
    );
};

export default Login;
