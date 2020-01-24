
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {

      tbl.increments();

      tbl.string("recipeName")
      .notNullable()
      .index();

      tbl.text("instructions")
      .notNullable();
    })

    .createTable("ingredients", tbl => {

      tbl.increments();

      tbl.string("ingredientName")
      .notNullable()
      .index();

    })

    .createTable("recipe_ingredients", tbl => {

      tbl.increments();

      tbl.integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

      tbl.integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

      tbl.float("quantity");

      
    })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("recipes")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipe_ingredients");
};
