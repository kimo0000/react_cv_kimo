import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home">
          <div className="home_content">
            <h1 className="home_title">touati Karim</h1>
            <h3>DEVELOPPER FRONT-END</h3>
              <a href='./imgs/CV.pdf' target='_blank'>
              <button className="home_btn">Telecharger CV-PDF</button>
              </a>
          </div>
        </div>
    );
};

export default Home;