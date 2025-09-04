//Immediately Invoked Function Expressions (IEFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
}()); // () lagye because of pollution caused caused by global scope

( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('simran')