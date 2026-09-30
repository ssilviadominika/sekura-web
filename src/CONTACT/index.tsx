import Navbar from "../components/Navbar";
import "./contact.css";

import telephone from "../assets/telephone.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.png";

import dekorasi1 from "../assets/dekorasi_1.png";
import dekorasi2 from "../assets/dekorasi_2.png";


function Contact() {
    return (
        <div className="contact-page">
            <Navbar />

            <img src={dekorasi2} alt="dekorasi kanan atas" className="contact-decoration-right" />
            <img src={dekorasi1} alt="dekorasi kiri bawah" className="contact-decoration-left" />


            <div className="contact-content">

                <div className="contact-item">
                    <img src={telephone} alt="telephone" className="contact-icon" />
                    <p>+62  081234567</p>
                </div>

                <div className="contact-item">
                    <img src={email} alt="email" className="contact-icon" />
                    <p>xxxxxxx.com</p>
                </div>

                <div className="contact-item">
                    <img src={instagram} alt="instagram" className="contact-icon" />
                    <p>xxxxxxxxxx</p>
                </div>

                
            </div>
            
        </div>
    );
}

export default Contact;