import React from 'react';
import './navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">

            <div className="logo">
                <img src="./imgs/Cartoonify.png" alt="Logo Pic" />
                <h3>KIMO DEVELLOPER FRONT END</h3>
            </div>

            <ul className="links">
                <li>
                    <NavLink to='/' activeclassename='active'>
                       <i className="fa-solid fa-house"></i>
                       <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/competence' activeclassename='active'>
                       <i className="fa-solid fa-table-list"></i> 
                       <span>Competences</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' activeclassename='active'>
                       <i className="fa-solid fa-toilet-portable"></i> 
                       <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeclassename='active'>
                       <i className="fa-solid fa-address-card"></i>
                       <span>Contact</span>
                    </NavLink>
                </li>
            </ul>

            <ul className="social">
                <li>
                    <a href="https://www.google.fr/" target="__blank">
                       <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.fr/" target="__blank">
                       <i className="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.fr/" target="__blank">
                       <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.fr/" target="__blank">
                       <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
            </ul>

            <div className="copy_right">
                <p>
                   &copy; by kimo-2022
                </p>
            </div>

        </div>
    );
};

export default Navigation;