const Todo = require("../model/todo");
const todosUtils = require('../utils/todos');

exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect("/");
  const todo = new Todo(todosUtils.generateRandomId(), req.body.todo);
  todo.save((err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};

exports.deleteTodo = (req, res) => {
  // console.log(req.params.id);
  Todo.deleteTodo(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};
exports.completedTodo = (req, res) => {
  Todo.setTodoToComplete(req.params.id, (err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};
