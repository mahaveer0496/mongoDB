var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var Todo = require('./models/Todo');
var User = require('./models/User');

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req, res)=>{
   var todo = new Todo({'text': req.body.text})

   todo.save().then((doc)=>{
      res.send(doc)
   }, (error)=>{
      console.log(`some error ${error}`);
      res.status(400).send(error);
   })
});

var port = 3001
app.listen(port, ()=>{
   console.log(`started on port ${port}`);
})



















// let newTodo = new Todo({
//    text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
//    console.log(`doc is saved ${doc}`);
// }, (e) => {
//    console.log(`unable to save`);
// });

// let newUser = new User({
//    email: 'mahaveer@email.com  '
// });

// newUser.save().then((doc) => {
//    console.log(`user saved ${doc}`);
// }, (e) => {
//    console.log(`unable to save`);
// })

// mongoose.disconnect()