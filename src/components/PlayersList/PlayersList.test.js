import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';


it('renders without crashing', () => {
  shallow(<PlayersList players={[]}/>);
});

it('renders correct number of players', () => {
  const players = [
    {
        name: 'Kunegunda',
        score: 5
    },
    {
        name: 'Antoś',
        score: 0
    }
  ]

  const playerComponent = shallow(<PlayersList players={players} />);
  const expectedPlayersNumber = playerComponent.find(Player).length;

  expect(expectedPlayersNumber).toEqual(2);
})

it('should call onScoreUpdate', () => {
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antoś',
      score: 0
    }
  ]

  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  const firstPlayer = playerComponent.find(Player).last();
  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
  onPlayerScoreChange(3);

  expect(mockedOnScoreUpdate).toBeCalledWith(1, 3);
})

it('should remove the right Player', () => {
  const players = [
    {
      name: 'Basia',
      score: 0,
    },
    {
      name: 'Adam',
      score: 3
    }
  ]

  const mockedOnPlayersListChange = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onPlayersListChange = {mockedOnPlayersListChange} />);

  const lastPlayer = playerComponent.find(Player).last();
  const onPlayerRemove = lastPlayer.prop('onPlayerRemove');

  onPlayerRemove();

  expect(mockedOnPlayersListChange).toBeCalled();
})