import React from 'react';

function Score(props) {
    return (
        <div className="score-container">
            <div className="score">
                <h3>TEAM A</h3>
                <h4>
                    0
                </h4>
            </div>
            <div className="score">
                <h3>TEAM B</h3>
                <h4>
                    0
                </h4>
            </div>
        </div>
    );
}

export default Score;