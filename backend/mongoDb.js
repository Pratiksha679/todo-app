const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pratikshasalian99:cxjtrqj431ut1D1K@cluster0.f2ijnqr.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}