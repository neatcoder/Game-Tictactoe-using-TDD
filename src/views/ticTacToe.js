class TicTacToe {
    constructor() {
        this.sequenceOfPlayerX = [];
        this.sequenceOfPlayerO = [];
        this.winningSequence = ['1', '2', '3'];
        this.winningPlayer = '';
        this.turnOfPlayer = "X";
    }

    handleClickInTheBox(event) {
        if (false === this.isSomethingFilledInTheBox(event)) {
            this.whenClicksMarkSomething(event);
        }
    }

    whenClicksMarkSomething(event) {
        if (this.turnOfPlayer === "X") {
            this.whenClicksMarkX(event);
            this.addSequenceOfPlayerX(event)
        } else {
            this.whenClicksMarkO(event);
        }
    }

    isSomethingFilledInTheBox(event) {
        return -1 === ["X", "O"].indexOf(event.target.innerText) ? false : true;
    }

    whenClicksMarkX(event) {
        event.target.innerText = 'X';
        this.changePlayerTurn("O");
    }

    whenClicksMarkO(event) {
        event.target.innerText = 'O';
        this.changePlayerTurn("X");
    }

    changePlayerTurn(player) {
        this.turnOfPlayer = player;
    }

    addSequenceOfPlayerX(event) {
        this.sequenceOfPlayerX.push(event.target.dataset.sequence);
        if(this.isPlayerXWon()){
            this.winningPlayer = 'X';
        }
    }

    isPlayerXWon() {
        let count = 0;
        for (let i of this.winningSequence) {
            for (let j of this.sequenceOfPlayerX) {
                if (i === j) {
                    count++;
                }
            }
        }
        return 3 === count ? true : false;
    }
}
module.exports = TicTacToe;