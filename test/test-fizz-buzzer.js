const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {

    it('should return fizz-buzz for multiples of 3 and 5', function () {
        const normalCases = [15, 30, 45, 60];
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input);
            answer.should.equal('fizz-buzz');
        });
    });

    it('should return fizz for multiple of 3', function () {
        const normalCases = [3, 6, 9, 12];
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input);
            answer.should.equal('fizz');
        });
    });

    it('should return buzz for multiple of 5', function () {
        const normalCases = [5, 10, 20];
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input);
            answer.should.equal('buzz');
        });
    });

    it('should return number if not multiple of any', function () {
        const normalCases = [1, 2, 4, 7, 13];
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input);
            answer.should.equal(input);
        });
    })

    it('should raise error if args not numbers', function () {
        const badInputs = ['a', true, false, function () { }, ['a', 'b', 'c']];
        badInputs.forEach(function (input) {
            (function () {
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    });
});
