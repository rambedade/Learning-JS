

// Recursion - when a function calls itself this is what is known as a recursion

// Recursion is an alternative way to run repetative code without use of loops

let counter=3

function example(){
    console.log(counter);
    counter=counter -1
    if(counter===0) return ;
    example()
}

console.log(example())