var TicTacToe = require('./views/TicTacToe');

function makeTicTacToeGameGrid() {
    document.body.innerHTML = '<div class="grid-container" id="grid"></div>';
    var element;
    for (i = 0; i < 9; i++) {
        element = document.createElement('div');
        element.className = 'grid-item';
        document.getElementById('grid').appendChild(element);
    }
}

makeTicTacToeGameGrid();
var tictactoe = new TicTacToe();

tictactoe.whenClicksMarkSomething = tictactoe.whenClicksMarkSomething.bind(tictactoe);
for (const element of document.getElementsByClassName('grid-item')) {
    element.addEventListener('click', tictactoe.whenClicksMarkSomething, false);
}