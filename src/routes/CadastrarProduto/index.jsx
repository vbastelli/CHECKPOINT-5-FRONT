import './estilo.css';
import { useState } from 'react';

const CadastrarProduto = ({ onAddProduct }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoProduto = { nome, descricao, preco, imagem };

        // Salva o novo produto no localStorage
        const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtosSalvos.push(novoProduto);
        localStorage.setItem('produtos', JSON.stringify(produtosSalvos));

        // Limpar os campos
        setNome('');
        setDescricao('');
        setPreco('');
        setImagem('');

        // Chama a função para adicionar o produto na Home
        onAddProduct(novoProduto);
    };

    const handleRemoveProducts = () => {
        // Remove todos os produtos do localStorage
        localStorage.removeItem('produtos');
        alert('Todos os produtos foram removidos do localStorage.');
    };

    return (
        <div className='container-form'>
            <form onSubmit={handleSubmit} className="cadastrar-produto">
                <h2>Cadastrar Produto</h2>
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL da Imagem"
                    value={imagem}
                    onChange={(e) => setImagem(e.target.value)}
                    required
                />
                <button  className='cadastrar-produto-button ' type="submit">Adicionar Produto</button>
            <button onClick={handleRemoveProducts} className="btn-remove">Remover Todos os Produtos</button>
            </form>
        </div>
    );
};

export default CadastrarProduto;
