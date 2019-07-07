var TicTacToe = require('./views/TicTacToe');

function makeTicTacToeGameGrid() {
    document.body.innerHTML='<div class="grid-container" id="grid"></div>';
    for(i=0; i<9; i++){
        document.getElementById('grid').appendChild('<div class="grid-item"></div>');
    }
}

makeTicTacToeGameGrid();
var tictactoe = new TicTacToe();