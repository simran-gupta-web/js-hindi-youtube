"use strict"; //treat all JS code as newer version
 
//alert() // we are usin nodejs not browser

console.log(3+3);
console.log("Simran")

let name = "simran"
let age = 18
let isLoggedin = false
let state;


//number => 2 to power 53
//bigint 
//string => ""
//boolean => true/false
//null => standalone value
//undefined => 
//symbol => unique
//object 

console.log(typeof "simran");
console.log(typeof age);
console.log(typeof null);

// Primitive datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
 
const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid);

//Reference type (non primitive)
// type : array, objects, functions 

const heros = ["shaktiman","naagraj", "doga"]
{
name:"simran"
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherid);


//+++++++++++++++++++++++++++++++++
//Memory
//Stack (Primitive), Heap(Non primitive)

let myYoutubename  = "simranguptadotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "simran@google.com"

console.log(userone.email);
console.log(usertwo.email);