const add = require("C:/Users/Sizwe/simple_calculator/src/simple_calculator.js")
const multiply = require("C:/Users/Sizwe/simple_calculator/src/simple_calculator.js")

describe('Calculator operation',function(){
    it('it should add two numbers', function(){
        expect(add(1,2)).toBe(3);
    })
    it('it should add more than two numbers', function(){
        expect(add(1,2,3,4,5)).toBe(15);
    })
});

describe('Multiplication operation', function(){
    it('it should multiply two numbers', function(){
        expect(multiply(1,3)).toBe(3);
    })
    it('it should multiply more than two numbers', function(){
        expect(multiply(1,2,3,4,5)).toBe(120);
    })
})