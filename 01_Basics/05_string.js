const name = "simran"
const repoCount = 50

//console.log(name+ repoCount +" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('simranhc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(-8,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "     Simran    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://simran.com/simran%20gupta"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

