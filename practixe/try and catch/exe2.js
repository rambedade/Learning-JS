
// throw an error  
// by using a throw  you can force an error to be thrown from the try block to the catch block

try{
    throw new Error()
}catch(err){
    console.log(err)
}
console.log("here err is an object")
console.log("This line now runs")