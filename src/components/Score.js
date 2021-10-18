import React, { useState } from 'react';

function Score({ players }) {
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [score, setScore] = useState(0)
    const [result, setResult] = useState(null)
    const [togglePlayer, setTogglePlayer] = useState(false)

    const handleSelectPlayer = (player) => {
        setSelectedPlayer(player)
        setTogglePlayer(!togglePlayer)
    }

    const handleThreePoint = () => {
        const percentageOfBasket = Math.floor(Math.random() * 100)
        if (selectedPlayer.threePointAvarage > percentageOfBasket) {
            setScore(score + 3)
            setResult("Başarılı")
        } else {
            setResult("Kaçtı")
        }
    }

    return (
        <div className="score-container">
            <div className="score">
                <div className="score-table">
                    <h3>TEAM A</h3>
                    <h2>
                        {score}
                    </h2>
                </div>
                <div className="line-players">
                    {
                        players.map((player, i) => {
                            return (
                                <div key={i} onClick={() => handleSelectPlayer(player)}>
                                    {player.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${togglePlayer ? "active" : ""} players-to-do`}>
                <h2>
                    {selectedPlayer && selectedPlayer.name}
                </h2>
                <div className="options">
                    <p onClick={handleThreePoint}>3'lük at</p>
                    <p>2'lük at</p>
                </div>
                <p>
                    {result}
                </p>
            </div>
            <div className="score">
                <div className="score-table">
                    <h3>TEAM B</h3>
                    <h2>
                        0
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Score;