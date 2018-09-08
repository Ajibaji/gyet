const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');



//get a list of todos from DB
router.get('/todos', function(req, res, next){
  console.log('GET request received');
  res.send({ type:'GET' });
});

//add a new todo to the DB
router.post('/todos', function(req, res, next){
  Todo.create(req.body).then(function(todo){
    res.send(todo);
  }).catch(next);
});

//update a todo in the DB
router.put('/todos/:id', function(req, res, next){
  console.log('PUT request received');
  res.send({ type:'PUT' });
});

//delete a todo from DB
router.delete('/todos/:id', function(req, res, next){
  console.log('DELET request received');
  res.send({ type:'DELETE' });
});

module.exports = router;