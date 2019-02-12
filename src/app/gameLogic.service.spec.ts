import { GameLogic } from './gameLogic.service';

describe('GameLogic Service', () => {
  let service: GameLogic;
  beforeEach(() => {
    service = new GameLogic();
  });

  it('should ...', () => {
    const result = service.determineWinner('Rock', 'Scissors');
    expect(result).toEqual('Player');
  });
});
