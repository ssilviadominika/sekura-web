import Navbar from "../components/Navbar";
import "./commodities.css";
import Footer from "../components/Footer";

import dekorasi1 from "../assets/dekorasi_1.png";
import dekorasi2 from "../assets/dekorasi_2.png";


function Commodities() {
    return (
        <div className="commodities-page">
            <Navbar />

            <img src={dekorasi2} alt="dekorasi kanan atas" className="commodities-decoration-right" />
            <img src={dekorasi1} alt="dekorasi kiri bawah" className="commodities-decoration-left" />

        <div className="commodities-content page-animation">
            <p>Sekura supplies a range of Indonesia’s premium commodities to both 
                domestic and international markets. Our offerings include coffee, 
                cocoa, cinnamon, and vanilla—all sourced locally and of the highest 
                quality. Each commodity boasts unique characteristics: green coffee beans 
                featuring distinctive flavor profiles from various Indonesian regions; 
                premium-quality cocoa suitable for diverse processing needs; cinnamon with its 
                signature aroma and taste; and vanilla, prized for its natural fragrance and 
                status as one of Indonesia’s flagship commodities. Sekura serves as a bridge 
                connecting Indonesia’s abundant natural resources to the global market, 
                providing local commodities that meet market demands while prioritizing 
                quality, consistency, and supply reliability. </p>
        </div>

        <Footer />

        </div>
    );
}

export default Commodities;