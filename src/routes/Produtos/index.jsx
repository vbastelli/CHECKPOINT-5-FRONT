import './estilo.css';

const Produtos = () => {
    const produtos = [
        {
            id: 1,
            nome: "Tesla Branco",
            descricao: "Ideal para longas viagens.",
            preco: "R$ 160.000",
            imagem: "carroeletrico1.jpg"
        },
        {
            id: 2,
            nome: "BYD Dolphina Amarelo",
            descricao: "O mais eficiente da categoria.",
            preco: "R$ 120.000",
            imagem: "carroeletrico2.jpg"
        },
        {
            id: 3,
            nome: "Tesla Preto",
            descricao: "Design moderno e sustentável.",
            preco: "R$ 175.000",
            imagem: "carroeletrico3.webp"
        },
        {
            id: 4,
            nome: "SUV Elétrico Preto",
            descricao: "Potente e elegante para qualquer terreno.",
            preco: "R$ 200.000",
            imagem: "carro4.webp"
        },
        {
            id: 5,
            nome: "SUV Elétrico Branco",
            descricao: "Conforto e sofisticação em um SUV elétrico.",
            preco: "R$ 195.000",
            imagem: "carro5.webp"
        },
        {
            id: 6,
            nome: "Fiat 500 Elétrico",
            descricao: "Compacto, ágil e 100% elétrico.",
            preco: "R$ 140.000",
            imagem: "carro6.webp"
        },
        {
            id: 7,
            nome: "Carro Elétrico Compacto",
            descricao: "Perfeito para a cidade e fácil de estacionar.",
            preco: "R$ 90.000",
            imagem: "carro7.webp"
        },
        {
            id: 8,
            nome: "Carro Elétrico Compacto Moderno",
            descricao: "Tecnologia avançada em um design compacto.",
            preco: "R$ 110.000",
            imagem: "carro8.jpg"
        },
        {
            id: 9,
            nome: "Carro Vermelho Elétrico Bizarro",
            descricao: "Design excêntrico e diversão garantida.",
            preco: "R$ 80.000",
            imagem: "carro9.webp"
        }
    ];

    return (
            <div className='container-2'>
            <div className="container">
                <h2 className="text-center">Tabela de Produtos</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>
                                    <img src={produto.imagem} alt={produto.nome} style={{ width: "100px", height: "auto" }} />
                                </td>
                                <td>{produto.nome}</td>
                                <td>{produto.descricao}</td>
                                <td>{produto.preco}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Produtos;
