import "./imprint.css";

interface ImprintProps {
    onClose: () => void;
}

function Imprint({onClose }: ImprintProps) {
    return (

        <div className="imprint-overlay" onClick={onClose}>

            <div className="imprint-popup" onClick={(e) => e.stopPropagation()}>
                <h1>Imprint</h1>

                <div className="imprint-item">
                    <h2>Address</h2>
                    <p>Jl. Tukad Nyali VIII No.3 Sanur 80228</p>
                </div>

                <div className="imprint-item">
                    <h2>Email</h2>
                    <a href="mailto:christina.hann@mogin.net">christina.hann@mogin.net</a>
                </div>

                <div className="imprint-item">
                    <h2>Registered office</h2>
                    <p>Denpasar</p>
                </div>

                <div className="imprint-item">
                    <h2>VAT ID</h2>
                    <p>53.060.356.2-903.000</p>
                </div>
            </div>
        </div>
    )
}

export default Imprint;