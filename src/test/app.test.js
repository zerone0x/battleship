const app = require('../index.js');

describe('app', () => {
    test('initGame' , () => {
        const game = app.initGame();
        expect(game.player).toEqual({
            gameboard: expect.any(Object)
        });
        expect(game.computer).toEqual({
            gameboard: expect.any(Object)
        });

        }
    )
    });
