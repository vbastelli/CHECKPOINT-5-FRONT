import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Error from './routes/Error';
import CadastrarProduto from './routes/CadastrarProduto';
import Login from './routes/Login';
import Produtos from './routes/Produtos';
import Sobre from './routes/Sobre';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
