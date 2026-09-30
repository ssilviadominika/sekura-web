import Navbar from "../components/Navbar";
import "./commodities.css";

import dekorasi1 from "../assets/dekorasi_1.png";
import dekorasi2 from "../assets/dekorasi_2.png";

function Commodities() {
    return (
        <div className="commodities-page">
            <Navbar />

            <img src={dekorasi2} alt="dekorasi kanan atas" className="commodities-decoration-right" />
            <img src={dekorasi1} alt="dekorasi kiri bawah" className="commodities-decoration-left" />

        <div className="commodities-content">
            <p>In the past 5 years, I have involved myself in interior design 
                knowledge that eventually became my passion. For me, interior 
                design is one of the most important things for someone in their real 
                life. It's not only about the aesthetic or layouting some stuff in one 
                room, but it is also about humanizing space. I love to learn and begin 
                some new things that I never tried before and join with excellent 
                people that push me to become more expert in that profession. 
                Hence, my goal is to explore more and further experience in interior 
                design. </p>
        </div>

        </div>
    );
}

export default Commodities;