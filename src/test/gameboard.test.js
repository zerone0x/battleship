const Gameboard = require('../modules/gameboard.js')

describe('Gameboard class could work well', () =>{
    let gameboard;
    beforeEach(()=>{
        gameboard = new Gameboard();
    })
    test('should create an instance of Gameboard', () => {
        expect(gameboard).toBeInstanceOf(Gameboard);
    })
    test('should have a board', () => {
        expect(gameboard.board).toEqual(new Array(10).fill(null).map(()=>new Array(10).fill(null)))
    })
    test('should have a ships array', () => {
        expect(gameboard.ships).toEqual([])
    })
    test('should placeship on the board', () => {
        gameboard.placeship(0,0,3)
        expect(gameboard.board[0][0].length).toBe(3)
    })
    test('should placeship on the board', () => {
        gameboard.placeship(0,0,3,'y')
        expect(gameboard.board[0][0].length).toBe(3)
    })
    test('should receiveAttack', () => {
        gameboard.placeship(0,0,3)
        expect(gameboard.receiveAttack(0,0)).toBe('hit')
    })
})