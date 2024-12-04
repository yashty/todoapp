const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://tyagiyash2612:Yash2612@cluster0.od0m9.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
