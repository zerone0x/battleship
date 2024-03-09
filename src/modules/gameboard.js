const Ship = require('./ship.js')
class Gameboard {
    constructor(ships=[]){
        // TODO 
        this.board =new Array(10).fill(null).map(()=>new Array(10).fill([null, 'empty']))
        this.ships = ships
        console.log("Initial ships state:", this.ships); // 这里应该显示所有船只的 hitTimes 为 0
    }

    placeship(x, y, shiplen, direction = 'x') {
        const newship = new Ship(shiplen, 0);
        console.log("New ship state:", newship); // 这里应该显示新船只的 hitTimes 为 0
        console.log("Initial ships state:", this.ships); // 这里应该显示所有船只的 hitTimes 为 0
        this.ships.push(newship);
        // TODO 
        if (direction === 'x') {
            if (x >= 0 && x + shiplen <= 10 && y >= 0 && y < 10) {
                for (let i = 0; i < shiplen; i++) {
                    this.board[x + i][y] = [newship, 'ship'];
                }
                return true;
            } else {
                return false;
            }
        } else if (direction === 'y') {
            if (y >= 0 && y + shiplen <= 10 && x >= 0 && x < 10) {
                for (let i = 0; i < shiplen; i++) {
                    this.board[x][y + i] = [newship, 'ship'];
                }
                return true;
            } else {
                return false;
            }
        }
    }
    
    receiveAttack(x,y){
        const target = this.board[x][y][0]
        if(target instanceof Ship){
            target.hit()
            // TODO 
            this.board[x][y][1] = 'X'
            if (target.sink == true){
                return 'sink'
            }
            return 'hit'
        }else{
            this.board[x][y] = 'O'
            return 'miss'
        }
    }


}



module.exports = Gameboard