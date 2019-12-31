function makeNumber(s) {
    let num = '';
    let digits = s.match(/\d+/g);
    if (digits) {
        num = digits.join('');
    }
    return num;
}

function countNumbers(s) {
    let digits = ('' + makeNumber(s)).split('').sort();
    let countNumbers = {};

    for (let i = 0; i < digits.length; i++) {
        if (typeof countNumbers[digits[i]] === 'undefined') {
            let counter = 1;
            for (let j = i + 1; j < digits.length; j++) {
                if (digits[j] === digits[i]) {
                    counter += 1;
                }
            }
            countNumbers[digits[i]] = counter;
        }
    }
    return countNumbers;
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
console.log(countNumbers(''));