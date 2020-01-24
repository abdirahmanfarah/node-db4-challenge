const express = require('express');

const Recipe = require("./recipesDb.js");

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.getRecipes()
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes"});
    })
})

router.get('/:id', (req, res) => {
  Recipe.getShoppingList(req.params.id)
    .then(recipe => {
      if(recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: "Could not find recipe with given id."})
      }

    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes"});
    })
})

router.get('/:id/instructions', (req, res) => {
  Recipe.getInstructions(req.params.id)
    .then(recipe => {
      if(recipe) {
        res.json(recipe);
      } else {
        res.status(404).json({ message: "Could not find recipe with given id."})
      }

    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes"});
    })
})


module.exports = router;