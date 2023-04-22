const express = require('express');
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

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

app.post("/control", async (req, res) => {
  const id = req.body.id;
  const light1 = req.body.light1;
  const light2 = req.body.light2;
  const light3 = req.body.light3;
  const fan1 = req.body.fan1;
  console.log(id);
  console.log(fan1);
  try{
    if(light2 != null){
        const result = await Device.findByIdAndUpdate({_id:id}, {$set:{light2: light2}}).then((response) => {
            console.log(response);
            res.send(response);
        });
    }
    else if(light1 != null){
        const result = await Device.findByIdAndUpdate({_id:id}, {$set:{light1: light1}}).then((response) => {
            console.log(response);
            res.send(response);
        });
    }
    else if(light3 != null){
        const result = await Device.findByIdAndUpdate({_id:id}, {$set:{light3: light3}}).then((response) => {
            console.log(response);
            res.send(response);
        });
    }
    else{
        const result = await Device.findByIdAndUpdate({_id: id}, {$set:{fan1: fan1}}).then((response) => {
            console.log(response);
            res.send(response);
        });
    }
    
  }
  catch(err){
    console.log(err);
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