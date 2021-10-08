// IMPORT MODULES under test here:
import { compareNumbers } from './functions.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Numbers are identical', (expect) => {
    const expected= '0';
    const actual = compareNumbers();
    expect.equal(actual, expected);
});