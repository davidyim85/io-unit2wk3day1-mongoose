require('dotenv').config();//this line reads out .env file
const express = require('express');
const Todo = require('./models/todo.js');

const app = express();

/*
middleware section here
*/
app.use(express.json());

/*
our Routes belong here (aka the controllers)
*/
app.get('/', (req, res) => {
    res.send(`hello world ${process.env.NAME}`);
})

//async is syntacic sugar for promises
app.get('/todo', async (req, res) => {
    try {
        //request information to the db. also notice the await keyword
        //this await keyword will wait for this to resolve before going to the next line below. 
        const x = await Todo.find({});
        res.json(x);
    } catch (err) {
        res.status(400).json(err);
    }
});

//route to create a todo!
app.post('/todo', async (req, res) => {
    try {
        res.json(await Todo.create(req.body));
    } catch (err) {
        res.status(400).json(err);
    }
});


app.delete('/todo/:id', async (req, res) => {
    try {
        res.json(await Todo.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
});

app.put('/todo/:id', async (req, res) => {
    try {
        res.json(await Todo.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});