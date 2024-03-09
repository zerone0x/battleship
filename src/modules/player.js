const Gameboard = require('./gameboard.js')
const Ship = require('./ship.js')
class Player{
    constructor(){
        this.gameboard = new Gameboard()
    }
}

module.exports = Player