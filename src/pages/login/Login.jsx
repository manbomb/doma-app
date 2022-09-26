import { useState } from 'react';
import styles from './Login.module.css';

import logo from '../../assets/logo.png';

import InputText from '../../components/inputText/InputText';
import PrimaryButton from '../../components/primaryButton/PrimaryButton';

const Login = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    return <div className={styles.container}>
        <img src={logo} alt="Logotipo" className={styles.logo} />
        <div className={styles.innerContainer}>
            <InputText
                value={user}
                onChange={setUser}
                placeholder="Usuário"
                className={styles.inputText}
            />
            <InputText
                value={pass}
                onChange={setPass}
                placeholder="Senha"
                className={styles.inputText}
                password={true}
            />
            <PrimaryButton
                label="Entrar"
                className={styles.button}
            />
            <a className={styles.seCadastrar}>Ainda não tenho conta</a>
        </div>
    </div>;
};

export default Login;