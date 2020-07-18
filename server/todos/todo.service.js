const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Todo = db.Todo;

module.exports = {
    getTodos,
    putTodos,
    delete: _delete
};


async function getTodos() {
    return await Todo.find();
}

async function putTodos(TodoParam) {
    const Todo = new Todo(TodoParam);
    await Todo.save();
}



async function _delete(id) {
    await Todo.findByIdAndRemove(id);
}
