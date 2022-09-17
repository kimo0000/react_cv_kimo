import React from 'react';
import './competence.css';

const Hobbit = () => {
    return (
        <div className="hobbit">
            <h2>Autre Competence</h2>
            <div className="hobbit_icon">
                <ul>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>Anglais</span>
                    </li>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>Methode Agil</span>
                    </li>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>SEO</span>
                    </li>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>Github</span>
                    </li>
                </ul>

                <ul>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>Figma</span>
                    </li>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>UI/UX design</span>
                    </li>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>Photosop</span>
                    </li>
                    <li>
                       <i className="fa-solid fa-square-check"></i>
                       <span>Montage Video</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hobbit;