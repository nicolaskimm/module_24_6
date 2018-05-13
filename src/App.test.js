import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    }
  ]

  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state('players');

  playersAfterUpdate[0].score;

  expect(playersAfterUpdate[0].score).toEqual(10);
})

it('should add new player', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');

  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Ania');
  expect(players[2].score).toEqual(0);
})

it('should show proper players length', () => {
  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    }
  ]

  const appComponent = shallow(<App />);
  appComponent.setState({ players });
  const onPlayersListChange = appComponent.find(PlayersList).prop('onPlayersListChange');

  onPlayersListChange(0);

  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate.length).toEqual(1);
})
