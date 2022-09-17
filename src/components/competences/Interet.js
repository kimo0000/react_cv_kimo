import React from 'react';
import './competence.css';

const Interet = () => {
    return (
        <div className="interet">
            <h2>interet</h2>
            <div className="interet_content">
                <ul>
                    <li>
                        <i className="fa-solid fa-church"></i>
                        <span>Court a Pied</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-shuffle"></i>
                        <span>Randonnee</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-mortar-pestle"></i>
                        <span>Permaculture</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-money-check-dollar"></i>
                        <span>Crypto-Money</span>
                    </li>
                    <li>
                        <i className="fa-brands fa-squarespace"></i>
                        <span>Espace</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Interet;