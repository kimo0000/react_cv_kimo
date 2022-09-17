import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact_overlay"></div>
            <div className="contact_content">
                <div className="contact_info">
                    <h2>Contactez Moi</h2>
                    <ul className="contact_address">
                       <li>
                         <i className="fa-solid fa-location-dot"></i>
                         <span>Bordeaux</span>
                       </li>
                       <li title='click'>
                         <i className="fa-solid fa-mobile-screen-button"></i>
                         <a href='/' onClick={() => {alert('Number Copier !')}}>06 42 84 42 84</a>
                       </li>
                       <li title='click'>
                         <i className="fa-solid fa-envelope"></i>
                         <a href='/' onClick={() => {alert('Adresse Copier !')}}>kimo@.gmail.com</a>
                       </li>
                    </ul>
                </div>
                <div className="contact_social">
                    <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer'>
                        <span>Linkedin</span>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/" target="_blank" rel='noreferrer'>
                        <span>Github</span>
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://twitter.com/home" target="_blank" rel='noreferrer'>
                        <span>Twitter</span>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://codepen.io/" target="_blank" rel='noreferrer'>
                        <span>CodePen</span>
                        <i className="fa-brands fa-codepen"></i>
                        </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;