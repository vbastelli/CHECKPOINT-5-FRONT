import './estilo.css';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        
        const storedData = sessionStorage.getItem('userData');
        if (!storedData) {
            alert('Nenhum usuário registrado. Por favor, registre-se primeiro.');
            return;
        }

        const decryptedData = JSON.parse(atob(storedData));
        if (decryptedData.username === username && decryptedData.password === password) {
            alert('Login realizado com sucesso!');
        } else {
            alert('Usuário ou senha incorretos!');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        const encryptedData = btoa(JSON.stringify({ username, password })); // Criptografia simples
        sessionStorage.setItem('userData', encryptedData); // Armazena no session storage
        alert('Registro realizado com sucesso! Você pode fazer login agora.');
        setIsRegistering(false); // Retorna para a tela de login
    };

    return (
            <div className='login-container-container'>
            <div className="login-container">
                <h2>{isRegistering ? 'Registrar' : 'Login'}</h2>
                <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Usuário:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar Senha:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="btn-login">
                        {isRegistering ? 'Registrar' : 'Entrar'}
                    </button>
                    <button type="button" className="btn-toggle" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Já tem uma conta? Faça login.' : 'Não tem uma conta? Registre-se.'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
