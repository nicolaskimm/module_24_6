import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Basia',
          score: 3
        },
        {
          name: 'Krzysio',
          score: 2
        }
      ]
    }
  }

  scoreSort = () => {
    let playersArray = this.state.players;

    playersArray.sort((a, b) => {
      return b.score - a.score;
    })

    this.setState({
      players: playersArray
    })
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      }),
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [ ...this.state.players, newPlayer]
    })
  }

  onPlayersListChange = (i) => {
    let playersArray = this.state.players;
    playersArray = playersArray.filter(player => playersArray.indexOf(player) !== i);
    this.setState({
      players: playersArray,
    })
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> Fantastic scorekeeper! </h1>
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayersListChange={this.onPlayersListChange} onScoreSort={this.scoreSort} />
      </div>
    );
  }
}

export default App;