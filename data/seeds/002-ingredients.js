
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1, 
          ingredientName: "chicken"
        },

        {
          id: 2, 
          ingredientName: "meatloaf"
        },
        {
          id: 3, 
          ingredientName: "garlic"
        }
      ]);
    });
};
