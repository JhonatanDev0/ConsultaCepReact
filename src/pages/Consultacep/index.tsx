/* eslint-disable jsx-a11y/alt-text */
import Search from 'assets/img/search.svg';
import BuscaImg from "assets/img/busca-img.png";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function consultaCep() {
    return (
        <>
            <NavBar />
            <div className="container">
                <img className="py-5" src={BuscaImg} />
            </div>
            <div className="container">
                <form>
                    <label className="fw-bold">Digite seu CEP:</label>
                    <br />
                    <input type="text" className="form-control" />
                    <button className="btn btn-warning" type ="button"><img src={Search} /></button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default consultaCep;