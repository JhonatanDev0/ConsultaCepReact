import Footer from "components/Footer";
import NavBar from "components/NavBar";

function consultaCep() {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Consulta CEP</h1>
            </div>
            <Footer />
        </>
    );
}

export default consultaCep;