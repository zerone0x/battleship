require('./style.css');
const Player = require('./modules/player.js')
const Gameboard = require('./modules/gameboard.js')
const Ship = require('./modules/ship.js')
const createGameGrids = require('./modules/dom.js')

// \\\\ DOM 
const startGame = document.getElementById('startGame')
const result = document.getElementById('result')
const First = document.getElementById('First') 
const Second = document.getElementById('Second')
const status = document.getElementById('status')
startGame.addEventListener('click', initGame)

First.addEventListener('click', ()=>{
    turn = 1
    First.style.backgroundColor = 'green'
    Second.style.backgroundColor = 'white'
}
)
Second.addEventListener('click', ()=>{
    turn = 0
    First.style.backgroundColor = 'white'
    Second.style.backgroundColor = 'green'
}
)


// First.addEventListener('click', )

// ========================================
const robot = new Player('robot')
const human = new Player('human')
let turn =1

initGame()
function initGrid(){
    createGameGrids()
    let computerCell = document.querySelectorAll('.computerCell')
    computerCell.forEach((cell)=>{
        cell.addEventListener('click', ()=>{
            if(turn == 1){
            humanattack(cell.dataset.x, cell.dataset.y)}
        })
        
    })
}
function initGame(){
    initGrid()
    // start from robot 
    
    generateShip(robot)
    generateShip(human)
    
    loopgame(turn, human, robot)
}
function robotattack(){

    const [randomX, randomY] = accessBoard(human)
    attack(human, randomX, randomY)

    if (gameOver(human,robot)){
        return
    }
    turn=1
}

function humanattack(x,y){
    attack(robot, x, y)
    if (gameOver(human,robot)){
        return
    }
    turn=0
    robotattack()
}
function loopgame(turn){
    if (turn == 0){
        robotattack()
    }
   
}
function generateShip(player){
    player.gameboard = new Gameboard()
    const shiplengh = [5,4,3,3,2]

    shiplengh.forEach((si)=>{
        player.gameboard.placeship(si)
    })
    if(player.name == 'human'){
    displayship(player)}
}


function displayship(player){
    const board = player.gameboard.board
    board.forEach((row, index)=>{row.forEach((item, jindex)=>{
        if (item[1] == 'ship'){
            const selectgrid = selectCell(player, index, jindex)
            selectgrid.innerHTML='🚢'
        }
    }
    )})
}

function selectCell(player, x, y){
    if (player.name == 'human'){
        selector = `.playerCell[data-x="${x}"][data-y="${y}"]`
    }else{
        selector = `.computerCell[data-x="${x}"][data-y="${y}"]`
    }
    const specificDiv = document.querySelector(selector)
    return specificDiv
}


function attack(player, x, y){
    // result.innerHTML = ''
    const res = player.gameboard.receiveAttack(x,y)
    status.innerHTML = `${player.name} attack ${x} ${y} with ${res}`
    const selectgrid = selectCell(player, x, y)
    if (player.gameboard.board[x][y][1] == 'X'){
        selectgrid.innerHTML='💥'
    }else if (player.gameboard.board[x][y][1] == 'O'){
        selectgrid.innerHTML='😅'}
    
    
    console.log('jkfsdjakfjdksjfk')
    if (res == 'sink' || res == 'hit'){
        // console.log('hit')
        
        return 'hit'
    }else{
        // result.innerHTML = res
        // console.log('miss')
        return 'miss'
    }
}
function accessBoard(player){
    const accessBoardX = [];
    let accessBoardY = [];
    player.gameboard.board.forEach((row, index) => {
    if (row.some(cell => cell[1] != 'X' && cell[1] != 'O')) {
        accessBoardX.push(index);
    }
    });
    
    const randomX = Math.floor(Math.random() * accessBoardX.length)
    player.gameboard.board[accessBoardX[randomX]].forEach((cell, index) => {
    if (cell[1] != 'X' && cell[1] != 'O') {
        accessBoardY.push(index);
    }
    });
    const randomY = Math.floor(Math.random() * accessBoardY.length)
    return [accessBoardX[randomX], accessBoardY[randomY]]
}



function gameOver(human, robot){
    result.innerHTML = ''
    human.gameboard.ships.every(ship=>console.log(ship.sink))
    robot.gameboard.ships.every(ship=>console.log(ship.sink))
    if(human.gameboard.ships.every(ship=>ship.sink)){
        result.innerHTML = 'robot win'
        console.log('robot won')
        return true
    }
    if(robot.gameboard.ships.every(ship=>ship.sink)){
        result.innerHTML = 'human win'
        console.log('human won')
        return true
    }
    console.log(human.gameboard.board)
    console.log(robot.gameboard.board)
    return false
}





module.exports = initGame;