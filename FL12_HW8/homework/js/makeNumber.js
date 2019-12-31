function makeNumber(s) {
    let num = '';
    let digits = s.match(/\d+/g);
    if (digits) {
        num = digits.join('');
    }
    return num;
}

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123098h76gfdd'));
console.log(makeNumber('ijifjgdj'));