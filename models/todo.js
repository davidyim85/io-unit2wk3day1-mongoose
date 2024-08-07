
//import the connection object (THIS IS NOT the package this from connetion.js THE FILE!)
const mongoose = require('./connection.js');

const todoSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;