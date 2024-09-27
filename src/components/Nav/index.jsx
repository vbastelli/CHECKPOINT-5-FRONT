import './estilo.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Carros Elétricos</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/produtos">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastrar-produto">Cadastrar Produto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
