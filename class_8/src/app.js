// MongoDB

const express = require('express')
const app = express()

app.use(express.json())

const {MongoClient, ObjectId} = require('mongodb')

const url = 'mongodb+srv://adnaniqbal:Q3drwSVU1KELCrfZ@cluster0.f0ecoxs.mongodb.net/'

const client = new MongoClient(url);

const dbName = 'SMITB15'

async function main() {
    
    await client.connect();
    console.log('Connected successfully to Database');

    const db = client.db(dbName);
    const collection = db.collection('students');

    // const insertStudent = async function () {
        
    //     await collection.insertOne({
    //         name : "Adnan",
    //         email: 'adnan@gmail.com'
    //     })
    // }
    

    const getStudent = await collection.findOne({name : "Adnan"})
    // console.log(getStudent);
    
    
    // const updateStudent = await collection.updateOne(
    //     {email : "adnan@gmail.com"},
    //     { $set : { email : "adnan1234@gmail.com" }}
    // )
    // console.log(updateStudent);
    

    // const deleteStudent = await collection.deleteOne(
    //     { email: "adnan@gmail.com"}
    // )
    // console.log("deleted =====>", deleteStudent);

        
        // const insertStudent = 
        
        // await collection.insertOne({
        //     name : "Usman",
        //     email: 'usman@gmail.com'
        // })
    
     
    
    
    
    return 'done'
    
}




app.use('/insert' , async (req, res) => {

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const insertStudent = 
        
    await collection.insertOne({
        name : "Usman",
        email: 'usman@gmail.com'
        })
    

    res.send('Inserted')
    
})


main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());

app.listen( 3000, () => {
    console.log("Server running on port: 3000")
    
})
