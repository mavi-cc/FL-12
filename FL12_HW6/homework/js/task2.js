let a = parseFloat(prompt('Input numeric value a'), '');
let b = parseFloat(prompt('Input numeric value b'), '');
let c = parseFloat(prompt('Input numeric value c'), '');


console.log(a, b, c);


if (!(isNaN(a) || isNaN(b) || isNaN(c))) {
    if (a !== 0 && b !== 0 && c !== 0) {
        if (a+b > c && a+c > b && b+c > a) {
            if (a === b && a === c) {
                console.log('Equivalent triangle');
              } else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
                console.log('Isosceles triangle');
              } else {
                console.log('Scalene triangle');
              }
        } else {
            alert('Triangle doesn’t exist');
        }
    } else {
        alert('A triangle must have 3 sides with a positive definite length ');
    }
} else {
    alert('input values should be ONLY numbers');
}