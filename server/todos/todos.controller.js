const express = require('express');
const router = express.Router();
const todoService = require('./todo.service');

// routes

router.post('/todos', putTodos);
router.get('/todos', getTodos);
router.delete('/todos/:id', _delete);

module.exports = router;

function putTodos(req, res, next) {
    todoService.putTodos(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getTodos(req, res, next) {
    todoService.getTodos()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    todoService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
