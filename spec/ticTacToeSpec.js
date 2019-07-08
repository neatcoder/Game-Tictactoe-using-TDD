var TicTacToe = require('../src/views/ticTacToe');

describe("TicTacToe Game", () => {
    var ticTacToe;
    beforeEach(() => {
        ticTacToe = new TicTacToe();
    });

    it('should score be 0 for both players in the beginning of the match', () => {
        expect(ticTacToe.scoreOfPlayerX).toBe(0);
        expect(ticTacToe.scoreOfPlayerO).toBe(0);
    });

    it('should MARK "X" if clicked in a box', () => {
        var event = {
            target: {
                innerText: ""
            }
        }

        ticTacToe.whenClicksMarkX(event);

        expect(event.target.innerText).toBe('X');
    });

    it('should MARK "O" if clicked in a box', () => {
        var event = {
            target: {
                innerText: ''
            }
        }

        ticTacToe.whenClicksMarkO(event);

        expect(event.target.innerText).toBe('O');
    });

    it('should MARK "O" if clicked in a box after X', () => {
        var event = {};
        ticTacToe.turnOfPlayer = 'O';
        ticTacToe.isSomethingFilledInTheBox = jasmine.createSpy();
        ticTacToe.isSomethingFilledInTheBox.and.returnValue(false);
        ticTacToe.whenClicksMarkO = jasmine.createSpy();

        ticTacToe.whenClicksMarkSomething(event);

        expect(ticTacToe.whenClicksMarkO).toHaveBeenCalledWith(event);
    });

    it('should MARK "X" if clicked in a box after O', () => {
        var event = {};
        ticTacToe.turnOfPlayer = 'X';
        ticTacToe.isSomethingFilledInTheBox = jasmine.createSpy();
        ticTacToe.isSomethingFilledInTheBox.and.returnValue(false);
        ticTacToe.whenClicksMarkX = jasmine.createSpy();

        ticTacToe.whenClicksMarkSomething(event);

        expect(ticTacToe.whenClicksMarkX).toHaveBeenCalledWith(event);
    });

    it('should MARK nothing if clicked in a box already filled with X', () => {
        var event = {
            target: {
                innerText: 'X'
            }
        };
        ticTacToe.whenClicksMarkSomething = jasmine.createSpy();

        ticTacToe.handleClickInTheBox(event);

        expect(ticTacToe.whenClicksMarkSomething).not.toHaveBeenCalled();
    });
})