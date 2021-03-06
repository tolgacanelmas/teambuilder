import React, { useEffect, useState } from 'react'
import '../index.css'
import playersJson from '../assets/players.json'
import Player from './Player'
import Score from './Score';

const Court = () => {
    const [players, setPlayers] = useState([
        {
            name: "Point Guard",
            position: "PG",
            isClicked: false,
            class: "pg",
            threePointAvarage: null,
            twoPointAvarage: null
        },
        {
            name: "Shooting Guard",
            position: "SG",
            isClicked: false,
            class: "sg",
            threePointAvarage: null,
            twoPointAvarage: null
        },
        {
            name: "Shooting Forward",
            position: "SF",
            isClicked: false,
            class: "sf",
            threePointAvarage: null,
            twoPointAvarage: null
        },
        {
            name: "Power Forward",
            position: "PF",
            isClicked: false,
            class: "pf",
            threePointAvarage: null,
            twoPointAvarage: null
        },
        {
            name: "Center",
            position: "C",
            isClicked: false,
            class: "c",
            threePointAvarage: null,
            twoPointAvarage: null
        }
    ])

    const [suitedPlayers, setSuitedPlayers] = useState([])

    const handlelistPlayers = (position) => {
        const isPrevPlayerClicked = players.find(player => player.isClicked)
        if (isPrevPlayerClicked !== undefined) {
            isPrevPlayerClicked.isClicked = false
        }
        const foundPlayerPositionIndex = players.findIndex(playerPos => playerPos.position === position)
        players[foundPlayerPositionIndex].isClicked = true
        setPlayers([...players])
    }

    const handleChangePlayer = (player) => {
        if (player.position.length === 1) {
            const foundPlayerPositionIndex = players.findIndex(playerPos => playerPos.position === player.position[0])
            players[foundPlayerPositionIndex].isClicked = false;
            players[foundPlayerPositionIndex].name = player.name
            players[foundPlayerPositionIndex].threePointAvarage = player.threePointAvarage
            players[foundPlayerPositionIndex].twoPointAvarage = player.twoPointAvarage
        } else {
            player.position.forEach(pos => {
                const newPlayer = players.findIndex(y => y.position === pos)
                if (players[newPlayer].isClicked) {
                    players[newPlayer].isClicked = false;
                    players[newPlayer].name = player.name
                    players[newPlayer].threePointAvarage = player.threePointAvarage
                    players[newPlayer].twoPointAvarage = player.twoPointAvarage
                }
            })
        }
        setPlayers([...players])
    }

    useEffect(() => {
        const clickedPosition = players.find(player => player.isClicked)?.position
        if (!clickedPosition) return
        const foundSuitedPlayers = playersJson.filter(player => player.position.includes(clickedPosition))
        setSuitedPlayers(foundSuitedPlayers)
    }, [players])

    return (
        <div>
            <Score players={players} />
            <div className="court">
                <div className="players">
                    <div className="players-outside">
                        {
                            players.map((player, i) => {
                                return (
                                    <Player
                                        key={i}
                                        player={player}
                                        class={player.class}
                                        handlelistPlayers={handlelistPlayers}
                                        suitedPlayers={suitedPlayers}
                                        handleChangePlayer={handleChangePlayer} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Court
