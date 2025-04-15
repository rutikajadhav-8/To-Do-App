const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const Task =require('./models/Task.js');
require('dotenv').config()
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/addNew', (req, res) => {
  const {taskName, datetime} = req.body;
  const task = Task.create({
    taskName,
    datetime
  });
  res.json(task);
});

app.get('/addNew', async(req, res) => {
  const tasks =  await Task.find();
  res.json(tasks);
});

app.delete('/addNew/:id', async (req, res) => {
  const deleteTask = await Task.findByIdAndDelete(req.params.id);
  res.json(deleteTask);
});

app.put('/addNew/:id', async(req, res) => {
  const {isCompleted} = req.body;
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, {isCompleted}, {new:true});
  res.json(updatedTask);
});

app.listen(3000);

//zIzGmkl0tudcjavO