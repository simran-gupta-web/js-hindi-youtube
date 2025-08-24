// singleton
// Object.create 

//object literals 

const muSym = Symbol("key1")

const JsUser = {
    name:"Simran",
    "full name": "Simran Gupta",
    [muSym]: "mykey1",
    age:18,
    location: "Jaipur",
    email:"simran212@gmail.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday","Saturday"]
}


//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(typeof JsUser[muSym])

JsUser.email = "simranguptachatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "simran@microsoft.com"
console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

sUser.greeting2  = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());