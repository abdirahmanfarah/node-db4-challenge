const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(id) {
  return db("recipe_ingredients as ri")
          .join("recipes as r", "ri.recipe_id", "r.id")
          .where("r.id", id)
          .join("ingredients as i", "ri.ingredient_id", "i.id")
          .select("r.id", "r.recipeName", "i.ingredientName", "quantity")
}

// function getInstructions(id) {
//   return db("recipe_ingredients as ri")
//           .join("recipes as r", "ri.recipe_id", "r.id")
//           .where("r.id", id)
//           .select("r.id", "r.instructions");
// }

function getInstructions(id) {
  return db("recipes").where({id}).select("instructions")

}