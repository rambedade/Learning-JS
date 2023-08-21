

let currency1 = 100
let currency2 = 0
let exchangeRate = 7.9

function convertCurrency (amount,rate){
    return amount * rate
}

currency2=convertCurrency(currency1,exchangeRate)

console.log(currency2)