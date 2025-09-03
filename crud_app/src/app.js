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
    
    return 'done'
    
}


app.use('/getstudents', async (req, res) => {

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students')

    const  getStudents = await collection.find({}).toArray()
    res.send(getStudents)
})


app.use('/insertstudent' , async (req, res) => {

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

app.use('/updatestudent' , async (req, res) => {

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const updateStudent = 
        
    await collection.updateOne(
        {email: 'usman@gmail.com'},
        {$set : {email : 'usmanali@gmail.com'}}
        
        )
    

    res.send('Updated')
    
})


app.use('/deletestudent' , async (req, res) => {

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const deleteStudent = 
        
    await collection.deleteOne(
        {name: 'Usman'}
        )

    res.send('Deleted')
    
})


main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());

app.listen( 3000, () => {
    console.log("Server running on port: 3000")
    
})
