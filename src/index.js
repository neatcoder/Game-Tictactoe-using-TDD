var TicTacToe = require('./views/TicTacToe');

function makeTicTacToeGameGrid() {
    document.body.innerHTML = '<div class="grid-container" id="grid"></div>';
    var element;
    for (let i = 1; i < 10; i++) {
        element = document.createElement('div');
        element.className = 'grid-item';
        element.dataset.sequence = i.toString();
        document.getElementById('grid').appendChild(element);
    }
}

makeTicTacToeGameGrid();
var tictactoe = new TicTacToe();

tictactoe.handleClickInTheBox = tictactoe.handleClickInTheBox.bind(tictactoe);
for (const element of document.getElementsByClassName('grid-item')) {
    element.addEventListener('click', tictactoe.handleClickInTheBox, false);
}