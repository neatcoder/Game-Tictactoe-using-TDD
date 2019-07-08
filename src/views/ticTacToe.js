class TicTacToe {
    constructor() {
        this.scoreOfPlayerX = 0;
        this.scoreOfPlayerO = 0;
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
        } else {
            this.whenClicksMarkO(event);
        }
    }

    isSomethingFilledInTheBox(event) {
        return event.target.innerText === "X" ? true : false;
    }

    whenClicksMarkX(event) {
        event.target.innerText = 'X';
        this.changePlayerTurn("O")
    }

    whenClicksMarkO(event) {
        event.target.innerText = 'O';
        this.changePlayerTurn("X")
    }

    changePlayerTurn(player) {
        this.turnOfPlayer = player;
    }
};
module.exports = TicTacToe;