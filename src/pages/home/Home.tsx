import React from "react";
import { useHistory } from "react-router-dom";

import ilustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleImg from '../../assets/images/google-icon.svg';

import '../../assets/styles/auth.scss';
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
    const history = useHistory();
    const {user, singnInWihGoogle} = useAuth()

    const handleCreateRoom = async () => {
        if(!user) {
            await singnInWihGoogle();
        }


        history.push('/rooms/new');
    };

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
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleImg} alt="Google Icon" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Informe o codigo da sala"/>
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export {Home};