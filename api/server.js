const express = require('express');

const RecipeRouter = require("../recipes/recipesRouter.js");

//server express

const server = express();

//Parse json

server.use(express.json());

server.get('/', (req, res) => {
  res.send("Server up and running!")
})

//router for recipe book

server.use('/api/recipes', RecipeRouter);

module.exports = server;