import React, { Component } from 'react';
import './competence.css';
import Language from './languages/language';
import Interet from './Interet';
import Experience from './Experience';
import Hobbit from './Hobbit';


class Competence extends Component {
    render() {
        return (
            <div className="competences">
                <Language />
                <Experience />
                <Hobbit />
                <Interet />
            </div>
        );
    }
}

export default Competence;

