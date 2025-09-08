const {connectDB}  = require('./config/database')




const express = require('express')
const { User } = require('./model/user')


const app = express()

app.use(express.json())


// crud application using mongoose
app.use('/user', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.use('/user', async (_, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send()
    }
})


app.use('/user/:id', async (req, res) => {
    const data = req.body
    const { id } = req.params
    try {
        const user = await User.findByIdAndUpdate(id, data, {
            returnDocument: 'after'
        })
        res.send('User updated successfully !' + user)
    } catch (error) {
        res.status(500).send('Error updating user')
    }
})




app.use('/user/:id', async (req, res) => {
    const { id } = req.params
    try {
        await User.findByIdAndDelete(id)
        res.send('User deleted successfully !')
    } catch (error) {
        res.status(500).send('Error deleting user')
    }
})





connectDB().then( () => {
    console.log('Connected to Mongoose')
    
    app.listen( 3000, () => {
        console.log("Server is running on port: 3000 ")
        
    } )


}).catch( () => {
    console.log('Not connected to Mongoose', error)
} )
