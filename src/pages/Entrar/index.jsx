import { HeaderForm } from "../../components/HeaderForm";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState } from 'react'
import './index.css'



export function Entrar() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function submit(event) {
        event.preventDefault()
        //Lógica para verificar login
        axios.get('/api/get')
            .then(response => {
                let usuarios = response.data.users;
                let logado = false;
                    usuarios.forEach(element => {
                        if (email == element.email && senha == element.senha){
                            localStorage.setItem('loggedUser', JSON.stringify(element))
                            logado = true
                        }
                    });
                
                if(logado) {
                    alert('usuário logado com sucesso')
                } else {
                    alert('usuário não encontrado')
                }

                })
    }

    return (
        <div id='login-wrapper'>
            <HeaderForm text={'NPJ CONNECT É A SUA CONEXÃO DIRETA COM A '} textYellow={'JUSTIÇA!'} />
            <div className='form-wrapper-entrar'>

                <div className='form-contents-wrapper'>
                    <span className='text-top'>Entre na sua conta agora mesmo!</span>
                    <form action="" onSubmit={submit}>
                        <Input
                            type='email'
                            placeholder={'Login'}
                            label={'E-mail ou CPF:'}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoFocus
                        />
                        <Input
                            type='password'
                            placeholder={'Senha'}
                            onChange={(e)=>{setSenha(e.target.value)}}
                            label={'Senha:'}
                            required
                        />
                        <div><Link className="esqueceuSenha" to="#">Esqueceu sua senha?</Link></div>
                        <button className="buttonEntrar" type='submit'>
                            ENTRAR NA MINHA CONTA
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}