const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo}  = require('./models/todo');
const {User} = require('./models/user');

// const id = '5b49f44c237977188cf8f823';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos',(req,res) => {
    console.log(req.body);
    const todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
        

    },(e) => {
        res.status(400).send(e)
    })
});

app.get('/todos',(req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    },(e) => {
        res.status(400).send(e)

    })

});

app.get('/todos/:id',(req, res) => {
    console.log('body',req.body);
    console.log('req.params',req.params)
    console.log('req.url',req.url)
    const id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send(); 
    };

    Todo.findById({_id:id}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch(e =>  res.status(400).send(e))

})

app.listen(port,'127.0.0.1',() => {
    console.log(`Server is started on port ${port}`);
    
})

module.exports = {
    app
}


