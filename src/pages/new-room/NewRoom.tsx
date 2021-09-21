import React from "react";
import { Link } from "react-router-dom";

import ilustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import '../../assets/styles/new-room.scss';
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

const NewRoom = () => {
    const {user} = useAuth();

    return(
        <div id="page-auth">
            <aside>
               <img src={ilustrationImg} alt="Image Ilustration" />
               <strong>Crie ou acesse suas salas de discursões</strong>
               <p>Tire suas dúvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo Project" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da sala"/>
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? 
                        <Link to="/"> Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}

export {NewRoom};