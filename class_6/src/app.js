const express = require('express')

const app = express()


app.use(express.json()) // to parse incoming JSON requests


let myProducts =  [
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
            },
            {
                "id": 2,
                "title": "Backpack, Fits 15 Laptops",
                "price": 209.95,
                "description": "everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
            },
            {
                "id": 3,
                "title": " Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 309.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
            }
        ] 


app.get('/products', (req , res) => {

    res.send(myProducts)

})


let user = true

app.post('/addproduct', (req , res) => {
    
    if (user) {

        const product = req.body
        myProducts.push(product)
        res.send(myProducts)

    }else{
        res.status(401).send('Product added failed')
    }

})


app.delete('/deleteproduct', (req, res) => {
    const deleteproduct = req.body
        myProducts = myProducts.filter(prod => prod.id !== deleteproduct.id)
        res.send(myProducts)
    
    
})


app.put('/updateproduct', (req, res) => {

    const reqUpdateproduct = req.body
  
    let updateProduct = myProducts.find(prod => prod.id == reqUpdateproduct.id)
    
    if (updateProduct) {
        
        updateProduct.title = 'Backpack'
    }   

    res.send(myProducts)
    

})


//params

app.get('/product/:id', (req, res) => {
    const params = req.params
    const product = myProducts.find((p) => p.id === parseInt(params.id) )
    if (product) {

        res.send('Product id ======>' + params.id)
        
    }else{
        res.status(404).send('Product Not Found')
    }
})



// to handle all incoming requests at the same route.

app.use('/allproduct', (req, res) => {
    if (req.method === 'GET') {
        res.send('This is a Get Request')

    }else if (req.method === 'POST') {
        res.send('This is a POST Request')

    }else if (req.method === 'PUT') {
        res.send('This is a PUT Request')
    }
    else if (req.method === 'DELETE') {
        res.send('This is a DELETE Request')
    }
})



// next() // to pass control to the next middleware function in the stack


app.use('/', 
    (req, res, next) => {

        next()
        console.log('First Request');

    },
    (req, res) => {

        console.log('Second Request');
        res.send('Second Request')
        
    }

)




app.listen(3000, () => {
    console.log('Server is running on port: 3000');
    
    
})