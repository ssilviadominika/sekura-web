import Navbar from "../components/Navbar";
import "./company.css";

import dekorasi1 from "../assets/dekorasi_1.png";
import dekorasi2 from "../assets/dekorasi_2.png";


function Company() {
    return (
        <div className="company-page">
            <Navbar />

            <img src={dekorasi2} alt="dekorasi kanan atas" className="company-decoration-right" />
            <img src={dekorasi1} alt="dekorasi kiri bawah" className="company-decoration-left" />


            <div className="company-content">

                <p className="company-text">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                </p>

                <div className="company-line"></div>

                <p className="company-text">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                </p>
            </div>

        </div>
    );
}

export default Company;