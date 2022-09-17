import React, { Component } from 'react';
import './portfolio.css';

export default class Projects extends Component {

  state = {
    popup: false
  }

  handlePopup = () => {
    this.setState({
        popup: !this.state.popup
    })
  }

  render() {

    let {name, languagesIcons, source, info, picture} = this.props.project;
    let {popup} = this.state;

    return (
     <>
      <div className="project_card">
        <div className="project_icon">
            {
                languagesIcons.map(icon => 
                    <i className={icon} key={icon}></i>
                    )
            }
        </div>
        <h3 className="project_title">{name}</h3>
        <div className="project_img">
            <img src={picture} alt={name} onClick={this.handlePopup}/>
        </div>
        <div className="project_link" onClick={this.handlePopup}>
            <i className="fa-regular fa-square-plus"></i>
        </div>
      </div>

      {
         popup && (
            <div className="popup">
                <div className="popup_content">
                    <div className="popup_head">
                        <h3>{name}</h3>
                        <button className="btn_source">
                            <a href={source} target='_blanc'>Code Source</a>
                        </button>
                    </div>
                    <p>
                        {info}
                    </p>
                    <button className='btn_close' onClick={this.handlePopup}>Retour a la page Portfolio</button>
                </div>
            </div>
         )
      }
     </>
    )
  }
}
