const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
    //this keyword current context ko refer krta hai 
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

/*function chai(){
    let username = "Simran"
        console.log(this.username);
    
}

chai() */

/*const chai = function (){
    let username = "Simran"
        console.log(this.username);
}
*/

const chai = () => {
    let username = "Simran"
        console.log(this);
}


//chai()

//const addTwo = (num1, num2) => {
  //  return num1 + num2
//}

//const addTwo = (num1, num2) =>  num1 + num2 
//const addTwo = (num1, num2) =>  (num1 + num2) // {} lagaye to return likhna padega, () me nhi lagta 
const addTwo = (num1, num2) =>  ({username: "Simran"})



console.log(addTwo(3,4));




