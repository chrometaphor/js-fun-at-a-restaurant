function nameMenuItem(name) {
  return "Delicious " + name

}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  };
}

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)) {
    ingredients.push(ingredient);
  }
  return ingredients;
}
;

function formatPrice(price) {
  return "$" + price.toFixed(2);
}

function decreasePrice(price) {
  return price * 0.9;
}

function createRecipe(recipeObject) {
 return recipeObject
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


