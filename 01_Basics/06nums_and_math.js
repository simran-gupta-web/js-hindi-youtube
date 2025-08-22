const score = 400
console.log(score);
                                                 


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.9898
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));


//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.2));
//console.log(Math.min(6,4,8,3,2));
//console.log(Math.max(4,5,9,8,7));
console.log(Math.random());

console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);//1 se 9 tk value ddega

const min = 10
const max = 20


//formula , math.random 0 or 1 k andar value deti h
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
