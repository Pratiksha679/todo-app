const express = require("express");
const cors= require("cors");
const { createTodo, updateTodo } = require("./types");
const {todo} = require("./mongoDb");

const app = express();
app.use(express.json());
app.use(cors())

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).send({
            message:"You sent the wrong inputs"
        })
        return;
    }
    else{
        await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })

        res.json({
            message:"Todo created"
        })
    }
});


app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    if(!todos){
        res.status(411).send({
            message:"No Todos found"
        })
        return;
    }
    res.json({
        todos
    })
});


app.put("/completed", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).send({
            message:"You sent the wrong inputs"
        })
        return;
    }
    else{
        await todo.updateOne({
            _id: parsedPayload.id
        },{
            completed:true
        });
        res.json({
            message:"Updated successfull"
        })
    }
});

app.listen(3000);