const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.create();
  })
  .then(() => {
    recipeSchema.create({
      title: "Catalan Chicken Thighs",
      level: "Amateur Chef",
      ingredients: [
        "1/2 cup rice Brandy",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Andalusian Olvive oil",
        "3 tablespoons Clove",
        "3 tablespoons of Cinnamon",
        "3 tablespoons minced garlic",
        "salt to taste",
        "pepper to taste",
        "8 skinless, boneless chicken thighs",
      ],
    .then(create.Recipe)});
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    // console.error("Error connecting to the database", error);
  });

const catalanChicken = new Recipe({

  title: "Catalan Chicken Drumsticks 69",
  level: "Amateur Chef",
  ingredients: [
    "1/2 cup rice vinegar",
    "5 tablespoons honey",
    "1/3 cup soy sauce (such as Silver Swan®)",
    "1/4 cup Asian (toasted) sesame oil",
    "3 tablespoons Asian chili garlic sauce",
    "3 tablespoons minced garlic",
    "salt to taste",
    "8 skinless, boneless chicken thighs",
  ],
});
console.log(`"${catalanChicken.title} added to the database!`);
