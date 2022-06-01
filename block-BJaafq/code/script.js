/*
#### Add two number

1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
2. After writing the function write 5 tests for above function with different values
3. Throw an error when the arguments passed in not a number.
4. Make first test fail and see if you get the result of second test.
5. If not fix it using the test framework (try...catch) we learned in the testing framework video.
 */



//Functions - Add two Num

function addTwoNum (numA, numB) {
    return numA + numB
}

function testAddTwoNum () {
    result = addTwoNum(2, 6);
    let expected = 8;
    expect(result).toEqual(expected)
}

function testAddTwoNum2 () {
    result = addTwoNum(4, 6);
    let expected = 10;
    expect(result).toEqual(expected)
}

function testAddTwoNum3 () {
    result = addTwoNum(10, 6);
    let expected = 15;
    expect(result).toEqual(expected)
}

function testAddTwoNum4 () {
    result = addTwoNum(100, 500);
    let expected = 550;
    expect(result).toEqual(expected)
}

//Functions - Multiple two Num

function mulNum (numA, numB) {
    return numA * numB
}

function testmulNum () {
    result = mulNum(2, 6);
    let expected = 12;
    expect(result).toEqual(expected)
}

function testmulNum2 () {
    result = mulNum(100, 10);
    let expected = 1001;
    expect(result).toEqual(expected)
}

function testmulNum3 () {
    result = mulNum(10000, 10);
    let expected = 100000;
    expect(result).toEqual(expected)
}

function testmulNum4 () {
    result = mulNum(0.5, 100);
    let expected = 51;
    expect(result).toEqual(expected)
}







//Testing Framework
function test (message, callback) {
    try {
        callback();
        console.log(`✅`, message)
    } catch (error) {
        console.error(error);
        console.log(`❌`, message)
    }
}



//Assertion Library

function expect(actual) {
    return {
        toEqual: function(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

//TESTING

test(`adding two Numbers`, testAddTwoNum)
test(`adding two Numbers`, testAddTwoNum3)
test(`adding two Numbers`, testAddTwoNum4)
test(`adding two Numbers`, testAddTwoNum2)



test(`Multiple two Numbers`, testmulNum)
test(`Multiple two Numbers`, testmulNum2)
test(`Multiple two Numbers`, testmulNum3)
test(`Multiple two Numbers`, testmulNum4)






