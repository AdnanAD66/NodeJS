const express = require('express')
const { adminAuth } = require('./adminauth')

const app = express()

// app.use(express.json())

// app.use( '/', (req, res, next) => {

//     next()
//     console.log('First req');
//     res.send('First req')

// },
// (req, res) => {
    
//     console.log('Second req');
//     res.send('Second req')
// }
// )



// first approach

// app.use('/admin', (req, res, next) => {
    
//     const token = 123

//     const isAuthenticated = token === 123
//     if (!isAuthenticated) {
//         res.status(401).send('Unauthorized User')
//     }else{
//         next()
//     }
// })

// app.use('/admin/getAllData', (req, res) => {

//     res.send('All Data')
// })

// app.use('/admin/deleteData', (req, res) => {

//     res.send('Deleted Data')
// })


// Second approach

app.use('/admin', adminAuth)

app.use('/admin/getAllData', (req, res) => {

    res.send('All Data')
})

app.use('/admin/deleteData', (req, res) => {

    res.send('Deleted Data')
})



app.listen( 3000, () => {
    console.log('Server is running on port: 3000');
    
})