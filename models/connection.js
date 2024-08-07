//make it okay to use environment variable
//by importing the dotenv package
require('dotenv').config();


//import the mongoose package
const mongoose = require('mongoose');


//connect to the database using the connection string
mongoose.connect(process.env.DBURL);


// export that connection so that it can be used elsewhere
// this "mongoose" object is your key in communicating w/ the 
// mongodb database
module.exports = mongoose;