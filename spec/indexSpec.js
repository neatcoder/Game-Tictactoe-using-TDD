const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
var Game = require('../src/index');

describe("Game initialization", ()=>{
    var game;
    beforeEach(()=>{
        game = Game;
    });

    it("should show something", ()=>{
        expect(document.body.innerHTML).not.toBe("");
    });
})