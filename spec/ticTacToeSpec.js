var TicTacToe = require('../src/views/ticTacToe');

describe("TicTacToe Game", ()=>{
    var ticTacToe;
    beforeEach(()=>{
        ticTacToe = new TicTacToe();
    });

    it("should score be 0 for both players in the beginning of the match", ()=>{
        expect(ticTacToe.scoreOfPlayerX).toBe(0);
        expect(ticTacToe.scoreOfPlayerO).toBe(0);
    });

    it("should mark X if clicked in a box", ()=>{
        event={
            target:{
                innerText:""
            }
        }

        ticTacToe.whenClicksMarkX(event);

        expect(event.target.innerText).toBe('X');
    });
})