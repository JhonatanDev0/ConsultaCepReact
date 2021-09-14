/* eslint-disable jsx-a11y/alt-text */
import Search from 'assets/img/search.svg';
import BuscaImg from "assets/img/busca-img.png";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function consultaCep() {
    const myStyle = {
        width: '35%',
        marginLeft: '630px',
        marginTop: '-450px',
    }
    const myStyle2 = {
        marginTop: '50px'

    }
    return (
        <>
            <NavBar />
            <div className="container" style={myStyle2}>
                <img className="py-5" src={BuscaImg} />
            </div>
            <div className="container">
                <div style={myStyle}>
                    <label className="fw-bold">Digite seu CEP:</label>
                    <br />
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-warning" type="button"><img src={Search} /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default consultaCep;