const myNums = [1,2, 3]

//const myTotal =  myNums.reduce( function(acc,currval){
//    console.log(`acc: ${acc} and currval: ${currval}`);
    
//  return acc + currval
//  } , 0)

const myTotal= myNums.reduce( (acc, curr)  => acc+curr,0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 2559
    },
    {
        itemname: "py course",
        price: 1999
    },
    {
        itemname: "mobile dev course",
        price: 2599
    },
    {
        itemname: "data science course",
        price: 2000
    }
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0 )