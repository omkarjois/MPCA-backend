const express = require('express');
const mongoose = require('mongoose')
const app = express();

app.use(express.json());

const Device = require("./device");

const uri = "mongodb+srv://OmkarJois:omkar2003@cluster0.x3iueai.mongodb.net/?retryWrites=true&w=majority";

async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("Connected to mongodb");
  }
  catch(error){
    console.log(error);
  }
}

app.post("/light1", async (req, res) => {
  try{
    const product = await Device.create(req.body);
    res.status(200).json(product);
  }
  catch(error){
    console.log(error);
  }
})

app.get('/', async (req, res) => {
  const data = await Device.find({});
  res.json(data);
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
})

connect();