import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';


const PlayersList = (props) => (
  <ul className="PlayersList">
    <div className='PlayersArray'>
      {props.players.map((player, i) => (
        <Player
          key={i}
          name={player.name}
          score={player.score}
          onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
          onPlayerRemove={() => props.onPlayersListChange(i)}
        />
      ))}
    </div>
    <div className='SortButton'>
      <button className="sort_Score" onClick={() => props.onScoreSort()}>Score high to low</button>
    </div>
  </ul>
);

export default PlayersList;