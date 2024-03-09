require('./style.css');
const Player = require('./modules/player.js')
const Gameboard = require('./modules/gameboard.js')
const Ship = require('./modules/ship.js')

function initGame(){
    const robot = new Player()
    const human = new Player()
    // start from robot 
    const turn = 0
    generateShip(robot)
    generateShip(human)
    
    loopgame(turn, human, robot)
}
function generateShip(player){
    const shiplengh = [5,4,3,3,2]

    shiplengh.forEach((si)=>{
        let x = Math.floor(Math.random() * 10)
        let y = Math.floor(Math.random() * 10)
        let direction = Math.random() > 0.5 ? 'x' : 'y'
        if (player.gameboard.placeship(x,y,si,direction)){
            // 填充到board上
            console.log('ship', x, y, si, direction)
            
        }
    })
}
initGame()


function loopgame(turn, human, robot){
    let count = 0
    while(!gameOver(human,robot)){
    // while(count <10){
        count++
        if (turn == 0){
            // robot attack human
            const [randomX, randomY] = accessBoard(human)
            if (randomX == 11){
                console.log('robot win')
                break
            }
            console.log('327483758437538457843857')
            console.log(human.gameboard.board[randomX][randomY])
            const res = attack(human, randomX, randomY)
            console.log(human.gameboard.board[randomX][randomY])
            console.log(count, ' robot attack human with', res, randomX, randomY)
        } else {
            // human attack robot
            const [randomX, randomY] = accessBoard(robot)
            if (randomX == 11){
                console.log('human win')
                break

            }
            const res =  attack(robot, randomX, randomY)
            console.log(count, ' human attack robot with',res, randomX, randomY)
        }
        console.log('-----------')
        console.log(human.gameboard.ships)
        console.log(human.gameboard)
        console.log(robot.gameboard)
        console.log('-----------')
        turn = switchTurn(turn)



        gameOver(human, robot)
        // console.log(human.gameboard.ships)
    }
    
}
function attack(player, x, y){
    const result = player.gameboard.receiveAttack(x,y)
    if (result == 'sink' || result == 'hit'){
        // console.log('hit')
        return 'hit'
    }else{
        // console.log('miss')
        return 'miss'
    }
}
function accessBoard(player){
    const accessBoardX = [];
    let accessBoardY = [];
    player.gameboard.board.forEach((row, index) => {
        // TODO
    if (row.some(cell => cell != 'X' && cell != 'O')) {
        accessBoardX.push(index);
    }
    });
    
    const randomX = Math.floor(Math.random() * accessBoardX.length)
    player.gameboard.board[accessBoardX[randomX]].forEach((cell, index) => {
    if (cell != 'X' && cell != 'O') {
        accessBoardY.push(index);
    }
    });
    const randomY = Math.floor(Math.random() * accessBoardY.length)
    console.log('666666666666')
    console.log(accessBoardX.length * accessBoardY.length)
    return [accessBoardX[randomX], accessBoardY[randomY]]
}



function gameOver(human, robot){
    console.log(human.gameboard.ships)
    console.log(robot.gameboard.ships)
    human.gameboard.ships.every(ship=>console.log(ship.sink))
    robot.gameboard.ships.every(ship=>console.log(ship.sink))
    if(human.gameboard.ships.every(ship=>ship.sink)){
        
        console.log('robot won')
        return true
    }
    if(robot.gameboard.ships.every(ship=>ship.sink)){
        console.log('human won')
        return true
    }
    console.log(human.gameboard.board)
    console.log(robot.gameboard.board)
    return false
}



function switchTurn(turn){
    // switch turn 
    return turn == 0 ? 1 : 0
    
}




module.exports = initGame;