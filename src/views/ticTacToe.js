class TicTacToe {

    constructor() {
        this.scoreOfPlayerX = 0;
        this.scoreOfPlayerO = 0;
    }

    whenClicksMarkX(event){
        event.target.innerText = 'X';
    }

    whenClicksMarkO(event){
        event.target.innerText = 'O';
    }
};
module.exports = TicTacToe;