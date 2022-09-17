import React from 'react';
import '../competence.css';

const ProgresseBar = ({title, language, className}) => {

     console.log(language);

    return (
        <div className="progress_Bar">
            <div className="prog_title">
                <h2>{title}</h2>
                <div className="years">
                    <span>Anne D'experience</span>
                    <span>1 an</span>
                    <span>2 ans</span>
                </div>
                {
                    language.map(item => {
                        let yearExp = 2;
                        let progressBar = item.exp / yearExp * 100 + '%';
                        //console.log(progressBar);
                        return (
                            <div key={item.id} className={className}>
                                 <h4>{item.value}</h4>
                                 <p style={{width: progressBar}} className='bar'></p>
                            </div>
                        )     
                    })
                }
            </div>
        </div>
    );
};

export default ProgresseBar;