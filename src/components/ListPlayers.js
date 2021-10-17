import React from 'react'

const ListPlayers = ({ suitedPlayers = [], handleChangePlayer }) => {

    if (suitedPlayers.length === 0) return null

    return (
        <ul className="player-list">
            {
                suitedPlayers.map((player, i) => {
                    return (
                        <li key={i} onClick={() => handleChangePlayer(player)}>
                            <label>
                                {player.name}
                            </label>
                            <p>
                                {player.power}
                            </p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListPlayers
