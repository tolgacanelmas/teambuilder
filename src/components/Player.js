import React from 'react'
import ListPlayers from './ListPlayers'

const Player = ({ player, handlelistPlayers, suitedPlayers, handleChangePlayer }) => {

    return (
        <div className={`player ${player.class}`} onClick={() => handlelistPlayers(player.position)}>
            <p>
                {player.name}
            </p>
            {player.isClicked && <ListPlayers suitedPlayers={suitedPlayers} handleChangePlayer={handleChangePlayer} />}
        </div>
    )
}

export default Player
