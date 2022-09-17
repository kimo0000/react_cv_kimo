import React, { Component } from 'react';
import ProgresseBar from './ProgresseBar';
import '../competence.css';

class language extends Component {

     state = {
        language : [
            {id: 1, value: 'HTML', exp: 2},
            {id: 2, value: 'CSS', exp: 1.9},
            {id: 3, value: 'JAVASCRIPT', exp: 1.7},
            {id: 4, value: 'PYTHON', exp: 0.2} 
        ],

        frameworks : [
            {id: 1, value: 'REACT', exp: 1.5},
            {id: 2, value: 'JQUERY', exp: 0.3},
            {id: 3, value: 'SASS', exp: 0.5},
            {id: 4, value: 'BOOTSTRAP', exp: 1.1} 
        ]
    }

    render() {
        
        let { language, frameworks} = this.state;

        return (
            <div className='language'>
                <ProgresseBar title='languages'
                              language={language}
                              className='language_display'
                />                
                <ProgresseBar title='frameworks'
                              language={frameworks}
                              className='framework_display'
                />                
            </div>
        );
    }
}

export default language;