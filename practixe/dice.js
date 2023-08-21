function diceGame(){
    let sides=6;
    let randomNumber= Math.floor(Math.random()*sides + 1)
    return randomNumber
}
console.log(diceGame())

// console.log(Math.floor(33.2242))

// console.log(Math.random(100).toFixed(0))

// function getRandomMax(max){
//     return Math.floor(Math.random()*max)
// }

// console.log(getRandomMax(100))
