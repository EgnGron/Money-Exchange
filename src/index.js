// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    console.log(currency)

    const dignityCoins = "dignityCoins"
    const description = "description"

    const data = [{dignityCoins: 50, description: "H"}, 
                  {dignityCoins: 25, description: "Q"},
                  {dignityCoins: 10, description: "D"},
                  {dignityCoins: 5, description: "N"},
                  {dignityCoins: 1, description: "P"}]

    const maxInputCurrency = 10000
  
    function getMinimumNumberOfCoins(amount, dignityCoins) {
        const amountMin = amount - (amount % dignityCoins);
        const min = amountMin/dignityCoins
        return [min, amountMin]
    } 

    var result = {}
    
    if (currency <= 0 ) {
        return result
    }

    if (currency >= maxInputCurrency) {
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    var amount = currency

    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        const half = getMinimumNumberOfCoins(amount, element.dignityCoins)
        if (min = half[0]) {
            amount = amount - half[1]
            result[element.description] = min
        }
    }

    return result
}
