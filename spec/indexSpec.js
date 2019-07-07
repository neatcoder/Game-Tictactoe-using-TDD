var Index = require('../src/index');
var document = {
    body:{

    }
};
describe("Game initialization", ()=>{
    var game;
    beforeEach(()=>{
        game = new Game();
    });

    it("should show something", ()=>{
        expect(document.body).not.toBe({});
    });
})