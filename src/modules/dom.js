

function createGameGrids() {
    const playerGrid = document.getElementById('playerGrid');
    const computerGrid = document.getElementById('computerGrid');
    playerGrid.innerHTML = '';
    computerGrid.innerHTML = '';
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            console.log('create cell');
            const playerCell = document.createElement('div');
            const computerCell = document.createElement('div');
            playerCell.dataset.x = i;
            playerCell.dataset.y = j;
            computerCell.dataset.x = i;
            computerCell.dataset.y = j;
            playerCell.classList.add('playerCell');
            computerCell.classList.add('computerCell');
            
            playerGrid.appendChild(playerCell);
            computerGrid.appendChild(computerCell);
        }
    }
}


module.exports = createGameGrids;