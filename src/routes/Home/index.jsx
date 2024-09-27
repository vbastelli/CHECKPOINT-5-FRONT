import './estilo.css';
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import produtosData from '../../produtos.json'; // Ajuste o caminho conforme necessário

const Home = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Carregar produtos do localStorage ou do JSON inicial
        const produtosSalvos = localStorage.getItem('produtos');
        if (produtosSalvos) {
            setProdutos(JSON.parse(produtosSalvos));
        } else {
            setProdutos(produtosData); // Se não houver produtos no localStorage, usa os do JSON
            localStorage.setItem('produtos', JSON.stringify(produtosData)); // Salva os produtos do JSON no localStorage
        }
    }, []);

    const handleAddProduct = (novoProduto) => {
        const produtosAtualizados = [...produtos, novoProduto];
        setProdutos(produtosAtualizados);
        localStorage.setItem('produtos', JSON.stringify(produtosAtualizados)); // Salva os produtos atualizados no localStorage
    };

    return (
        <div className="home">
            {/* Slideshow de Imagens */}
            <section className="slideshow">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src="eletrico1.webp" alt="Carro Elétrico 1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="eletrico2.webp" alt="Carro Elétrico 2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="eletrico3.jpg" alt="Carro Elétrico 3" />
                    </Carousel.Item>
                </Carousel>
            </section>

            {/* Cards de Produtos */}
            <section className="products-section">
                <h2 className="text-center">Nossos Produtos</h2>
                <div className="container">
                    <div className="row">
                        {produtos.map((produto, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card product-card">
                                    <img src={produto.imagem} className="card-img-top" alt={produto.nome} />
                                    <div className="card-body">
                                        <h5 className="card-title">{produto.nome}</h5>
                                        <p className="card-text">{produto.descricao}</p>
                                        <p className="price">{produto.preco}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção Sobre o Tema */}
            <section className="about-section text-center">
                <h2>Sobre Carros Elétricos</h2>
                <p>
                    Os carros elétricos estão revolucionando o mercado automotivo. Com zero emissão de carbono, eles representam o futuro da mobilidade sustentável.
                    Aqui você encontra uma seleção dos melhores veículos elétricos, prontos para te levar ao futuro de forma ecologicamente correta e eficiente.
                </p>
            </section>
        </div>
    );
}

export default Home;
