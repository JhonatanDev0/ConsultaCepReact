import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Consulta Cep</h1>
                    <p className="lead">Consulte seu cep no botão abaixo:</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir o resultado de sua busca a partir da utilização de uma API externa.</p>
                    <Link className="btn btn-warning btn-lg" to="/consultacep">
                        Acessar
                    </Link>
                </div>
            </div>
            <Footer />
        </>

    );
}


export default Home;
