const Ship = require('./ship.js')
class Gameboard {
    constructor(ships=[]){
        this.board =new Array(10).fill(null).map(()=>new Array(10).fill([null, 'empty']))
        this.ships = ships
    }

    placeship(shiplen) {
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)
        let direction = Math.random() > 0.5 ? 'x' : 'y'
        if (this.checkposition(direction,x, y,shiplen)){
            const newship = new Ship(shiplen);
            this.ships.push(newship);
            this.fillboard(direction,x, y,shiplen,newship)
        }else{
            this.placeship(shiplen)
        }
    }

    fillboard(direction,x, y,shiplen,newship){
        if (direction === 'x') {
                for (let i = 0; i < shiplen; i++) {
                    this.board[x + i][y] = [newship, 'ship'];
                    console.log('this',this)
                }
        } else {
                for (let i = 0; i < shiplen; i++) {
                    this.board[x][y + i] = [newship, 'ship'];
            }
        }
    }

    checkposition(direction,x, y,shiplen){
         if (direction === 'x') {
            if (x  <= 10- shiplen) {
                for (let i = 0; i < shiplen; i++) {
                    if (this.board[x + i][y][1] === 'ship'){
                        return false
                    }
                }
                return true;
            } else {
                return false;
            }
        } else {
            if (y <= 10- shiplen) {
                for (let i = 0; i < shiplen; i++) {
                    if (this.board[x][y + i][1] === 'ship'){
                        return false
                    }
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
            // TODO 
            target.hit()
            this.board[x][y][1] = 'X'
            if (target.sink == true){
                return 'sink'
            }
            return 'hit'
        }else{
            this.board[x][y][1] = 'O'
            return 'miss'
        }
    }


}



module.exports = Gameboard