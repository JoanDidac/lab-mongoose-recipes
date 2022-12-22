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
    return Recipe.create({ title: "Catalan Ribs and Chickpeas Stew",
    level: "Amateur Chef",
    ingredients: [
      "10 Pork Ribs",
      "3 Red bell Peppers",
      "3 Onions",
      "1/4 Andalusian Olive oil",
      "3 garlic gloves",
      "3 tablespoons pepper",
      "salt to taste",
      "1 spoon of Paprika de la Vera",
      "500gr Tomatoe Sauce",
      "2 cloves",
      "Tea Spoon of Cummin"
    ],
     });
  })
  .then(createdRecipe => console.log(createdRecipe)) 
    
    .then(() => mongoose.connection.close())
    // Run your code here, after you have insured that the connection was made

  .catch((error) => {
    // console.error("Error connecting to the database", error);
  });

const catalanRibs = new Recipe({

  title: "Catalan Ribs and Chickpeas Stew",
  level: "Amateur Chef",
  ingredients: [
    "10 Pork Ribs",
    "3 Red bell Peppers",
    "3 Onions",
    "1/4 Andalusian Olive oil",
    "3 garlic gloves",
    "3 tablespoons pepper",
    "salt to taste",
    "1 spoon of Paprika de la Vera",
    "500gr Tomatoe Sauce",
    "2 cloves",
    "Tea Spoon of Cummin"
  ],
});

