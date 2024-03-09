const Player = require('../modules/player');

Describe('Player', () => {
    let player;
    beforeEach(() => {
        player = new Player();
    });
    test('should create an instance of Player', () => {
        expect(player).toBeInstanceOf(Player);
    });
    test('should have a gameboard', () => {
        expect(player.gameboard).toEqual(new Gameboard());
    });
    });