// Import as object | we use . in this way
// const importFromsum = require('./sum') 

// Destructuring
const { addition } = require('./sum') 
const { subtract } = require('./sub')
const { multiply } = require('./mul')
const { divide } = require('./div')

addition(2, 10)

subtract(2, 2)

multiply(2, 3)

divide(10 , 3)
