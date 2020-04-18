import React from 'react'
import { useToggle } from '../hooks/useToggle'
const PlayersCard = props => {
  const [open, toggle] = useToggle(false)
  return (
    <div key={props.player.id} className="player-card">
      <h1>Player Name: {props.player.name}</h1>
      <p>Country: {props.player.country}</p>
      <button onClick={toggle}>Searches: {props.player.searches}</button>
    </div>
  )
}
export default PlayersCard
