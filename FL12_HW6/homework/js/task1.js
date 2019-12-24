let a = parseFloat(prompt('Input numeric value a'), '');
let b = parseFloat(prompt('Input numeric value b'), '');
let c = parseFloat(prompt('Input numeric value c'), '');

const num4 = 4;
const num2 = 2;

if (a===0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else { 
    let D = b*b - num4*a*c;
    if (D === 0) {
        let x = -b / (num2*a);
        console.log('x=%f', x);
    } else if (D > 0) {
        let x1 = (-b+Math.sqrt(D)) / (num2*a);
        let x2 = (-b-Math.sqrt(D)) / (num2*a);
        console.log('x1=%f x2=%f', x1, x2);
    } else if (D < 0) {
        console.log('no solution');
    }  
}
