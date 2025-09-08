const {connectDB}  = require('./config/database')




const express = require('express')
const { User } = require('./model/user')


const app = express()

app.use(express.json())


// app.use('/signup', async (req, res) => {
    
//     const data = {
//         userName : "Ali",
//         email: "ali@gmail.com",
//         password : "12345"
//     }
    
//     const user = await User.insertOne(data)

//     user.save()

//     res.send('User Signup')
// })



// app.use('/', (req, res) => {
//     res.send('Hello World')
// })


connectDB().then( () => {
    console.log('Connected to Mongoose')
    
    app.listen( 3000, () => {
        console.log("Server is running on port: 3000 ")
        
    } )


}).catch( () => {
    console.log('Not connected to Mongoose', error)
} )
