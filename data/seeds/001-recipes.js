
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1, 
          recipeName: "Burger",
          instructions: "Bake a burger over a stove."
        },
        
        {
          id: 2, 
          recipeName: "Pizza",
          instructions: "Pizza is life I believe, but what are we gonna do about it."
        },

        {
          id: 3, 
          recipeName: "Chicken Sandwitch",
          instructions: "Best sandwitch in the world man. Best."
        },
      ]);
    });
};
