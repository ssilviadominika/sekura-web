import { useState } from "react";
import Imprint from "../../pages/IMPRINT";
import "./footer.css";

function Footer () {

    const [showImprint, setShowImprint] = useState(false);

    return (
        <>
            <footer className="footer">
            <div className="footer-content">
                <span>© 2022</span>
                <span className="footer-divider">|</span>
                <span>Sekura Commodities</span>
                <span className="footer-divider">|</span>
                <a 
                   href="#" 
                   onClick={(e) => { 
                    e.preventDefault();
                    setShowImprint(true);
                   }}
                >
                   Imprint
                </a>
            </div>

            </footer>

            {showImprint && (
                <Imprint onClose={() => setShowImprint(false)} />
            )}
        </>     
    );
}
export default Footer;