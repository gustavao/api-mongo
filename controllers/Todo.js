const Todo = require("../model/Todo");

const getTodos = (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      res.send(err);
    }
    res.json(todos);
  });
};

const createTodo = (req, res) => {
  const todo = new Todo({
    codeId: req.body.codeId,
    name: req.body.name,
    inventory: req.body.inventory,
    description:req.body.description, 
    price: req.body.price,
    image: req.body.image,
    active: req.body.active
  });

  todo.save((err, todo) => {
    if (err) {
      res.send(err);
    }
    res.json(todo);
  });
};

const updateTodo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        codeId: req.body.codeId,
        name: req.body.name,
        inventory: req.body.inventory,
        description:req.body.description, 
        price: req.body.price,
        image: req.body.image,
        active: req.body.active,
      },
    },
    { new: true },
    (err, Todo) => {
      if (err) {
        res.send(err);
      } else res.json(Todo);
    }
  );
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.todoID })
    .then(() => res.json({ message: "Todo Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
