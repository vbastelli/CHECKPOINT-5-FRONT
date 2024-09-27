// Footer.js
import './estilo.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="social-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
                <p className="copyright">© 2024 Carros Elétricos. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
