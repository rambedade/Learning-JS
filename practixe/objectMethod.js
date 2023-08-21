//the function declared inside any object as a property is known as a method

let car = {}

car.color="purple"
car.year=1902

car.greets=function(){
    console.log("hello driver")
}

car.command=function(){
   console.log("get inside the car! ")
}

console.log(car)

console.log(car.command())