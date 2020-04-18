import React from 'react'
import PlayersCard from './PlayersCard'

class PlayerList extends React.Component {
  render() {
    return (
      <div className="player-list">
        {this.props.data.map(player => (
          <PlayersCard key={player.id} player={player} />
        ))}
      </div>
    )
  }
}

export default PlayerList
