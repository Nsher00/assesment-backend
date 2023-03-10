const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getAnimal, addAnimal, deleteAnimal, animalSpeed} = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.get("/api/animal", getAnimal)
app.post("/api/animal", addAnimal)
app.delete('/api/animal/:animal', deleteAnimal)
app.put('/api/animal', animalSpeed)

app.listen(4000, () => console.log("Server running on 4000"));
