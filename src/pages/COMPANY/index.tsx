import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./company.css";

import dekorasi1 from "../../assets/dekorasi_1.png";
import dekorasi2 from "../../assets/dekorasi_2.png";


function Company() {
    return (
        <div className="company-page">
            <Navbar />

            <img src={dekorasi2} alt="dekorasi kanan atas" className="company-decoration-right" />
            <img src={dekorasi1} alt="dekorasi kiri bawah" className="company-decoration-left" />


            <div className="company-content page-animation">
                <p>
                    Sekura is a commodity export trading company operating under MOGIN GROUP. 
                    The company supplies Indonesian commodities to meet the demands of both domestic 
                    and international markets. Its product range includes coffee, cocoa, cinnamon, 
                    and vanilla—commodities for which Indonesia is renowned. In its trading operations, 
                    Sekura partners with selected Indonesian suppliers to provide commodities of superior 
                    quality and characteristics that align with global market standards. Through these 
                    partnerships, Sekura strives to ensure quality and supply reliability while expanding 
                    the reach of Indonesian commodities in the international market.
                </p>

            </div>

            <Footer />

        </div>
    );
}

export default Company;