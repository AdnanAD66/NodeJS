const express = require('express')

const app = express()


app.use(express.json()) // to parse incoming JSON requests

app.get('/', (req , res) => {
    res.send('Hello World')
})


app.get('/product', (req , res) => {
    res.send(
        [
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "rating": {
                    "rate": 3.9,
                    "count": 120
  }
}
        ]
    )
})



// let user = false

// app.post('/addproduct', (req , res) => {
    
//     if (user) {

//         res.send('Product added successfully')
        
//     }else{
//         res.status(401).send('Product added failed')
//     }

// })


let user = true

app.post('/addproduct', (req , res) => {
    
    if (user) {

        const product = req.body
        res.send(product)

    }else{
        res.status(401).send('Product added failed')
    }

})




app.listen(3000, () => {
    console.log('Server is running on port: 3000');
    
})