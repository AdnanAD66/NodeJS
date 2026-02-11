const mongoose = require('mongoose');

// pass the database name in the end of the url if you want to conneted to specific database
const url = 'mongodb+srv://user:pass@cluster0.f0ecoxs.mongodb.net/SMITB15'

async function connectDB() {
  await mongoose.connect(url);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}





module.exports = {
    connectDB
}
