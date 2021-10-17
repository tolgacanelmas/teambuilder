import React from 'react'
import ListPlayers from './ListPlayers'

const Player = ({ player, handlelistPlayers, suitedPlayers, handleChangePlayer }) => {

    return (
        <div className={`player ${player.class}`}>
            <div className="player-inner" onClick={() => handlelistPlayers(player.position)}>
                <p>
                    {player.name}
                </p>
            </div>
            {player.isClicked && <ListPlayers suitedPlayers={suitedPlayers} handleChangePlayer={handleChangePlayer} />}
        </div>
    )
}

export default Player
