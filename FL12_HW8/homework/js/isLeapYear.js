function isLeapYear(date) {
    let currentDate = new Date(date).getFullYear();
    if (currentDate % 4 === 0) {
        return currentDate + ' is a leap year';
    } else if (!currentDate % 4 === 0) {
        return currentDate + ' is not a leap year';
    } else {
        return 'Invalid Date';
    }
}

console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear('2200-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));