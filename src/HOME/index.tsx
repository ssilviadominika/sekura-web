import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";
import "./home.css";

import logoSekura from "../assets/logo1.png";
import dekorasi1 from "../assets/dekorasi_1.png";
import dekorasi2 from "../assets/dekorasi_2.png";



function Home() {
  return (
    <div className="home-page">

      <img src= {dekorasi2} alt="dekorasi kanan atas" className="home-decoration-right" />
      <img src= {dekorasi1} alt="dekorasi kiri bawah" className="home-decoration-left" />
      
      <Navbar />

      <div className="home-logo page-animation">
        <img
          src={logoSekura}
          alt="Logo Sekura"
        />
      </div>

      <div className="home-content page-animation">
        <h1>SEKURA COMMODITIES</h1>
        <p>by <strong>MOGIN GROUP</strong></p>
        <p>Denpasar, Bali</p>

      </div>

      <Footer />

    </div>
  );
}

export default Home;