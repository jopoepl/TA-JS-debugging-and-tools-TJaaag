firstName = `Joel`;
lastName = `Joseph`

fullName = firstName + lastName;

expected = `Joel Joseph`

if (fullName !== expected) {
    throw new Error (`${fullName} is not equal to ${expected}`)
}

if (fullName === expected) {
    throw new Error (`${fullName} is equal to ${expected}`)
}

//The second test was not initiated since the code stopped at the first test itself


let amount = 1000;

const taxRate = 0.10;

totalAmount = amount + (amount * taxRate);

expected = 1101

if (totalAmount !== expected) {
    throw new Error (`${totalAmount} is not equal to ${expected}`)
}

if (totalAmount == expected) {
    throw new Error (`${totalAmount} is equal to ${expected}`)
}

//The second test was not initiated since the code stopped at the first test itself
