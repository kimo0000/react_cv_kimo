import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Projects from './Projects';
import './portfolio.css';

class Portfolio extends Component {
    
    state = {
        projects: portfolioData,
        radios: [
            {id: 1, value: 'JAVASCRIPT'},
            {id: 2, value: 'CSS'},
            {id: 3, value: 'PHP'},
            {id: 4, value: 'REACT'}
        ],
        selectedRadio: 'JAVASCRIPT'
    };

    HandleSearch = (e) => {
       this.setState({
        selectedRadio: e.target.value
       })
    } 
    
    render() {
        
        let { projects, radios, selectedRadio } = this.state;

        return (
            <div className="portfolio">
                <div className="portfolio_content">
                    <ul className="portfolio_radio">
                        {
                            radios.map(radio =>
                                <li className="input_radio" key={radio.id}>
                                    <input type="radio" 
                                           name='radio'
                                           value={radio.value}
                                           id={radio.value}
                                           checked={radio.value === selectedRadio}
                                           onChange={this.HandleSearch}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                                )
                        }
                    </ul>
                    <div className="project_list">
                      {
                        projects.filter(project => project.languages.includes(selectedRadio.toLowerCase()))
                            .map((project) => <Projects key={project.id} 
                                                            project={project}
                                                  />)
                      }
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;