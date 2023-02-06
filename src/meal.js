function nameMenuItem(name) {
  return "Delicious " + name
}
//The function nameMenuItem takes a single argument name, which is expected to be a string. The function concatenates the string "Delicious " to the start of name using the "+" operator, and returns the result as a string. The final result of the function is a string in the format "Delicious X", where X represents the original value of name.

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  };
}
// funct. createMenuItem creates and returns a new JavaScript object with three properties: name, price, and type. The values for these properties are passed to the function as arguments name, price, and type respectively, and are used to initialize the corresponding properties of the object being returned.

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)) {
    ingredients.push(ingredient);
  }
  return ingredients;
}
;
// The funct. addIngredients takes two arguments: ingredient and ingredients. ingredient is a value to be added to the ingredients array. The function checks if ingredient is already present in the ingredients array using the Array.includes() method. If ingredient is not found in the ingredients array, it is added to the end of the array using the Array.push() method. The updated ingredients array is returned as the result of the function.

function formatPrice(price) {
  return "$" + price.toFixed(2);
}
// The function formatPrice takes a single argument price, which is expected to be a numerical value. The function converts the price to a string representation of a currency value by using the toFixed() method. This method rounds the number to a specified number of decimal places (in this case, 2) and returns the result as a string. The dollar sign "$" is then concatenated to the start of the string returned by toFixed(). The final result of the function is a string in the format "$X.XX", where X represents the rounded decimal value of price.

function decreasePrice(price) {
  return price * 0.9;
}
// The function decreasePrice takes a single argument price, which is expected to be a numerical value. The function returns the result of price multiplied by 0.9. This calculation results in a decrease of 10% of the value of price, which is returned as the result of the function.

function createRecipe(recipeObject) {
 return recipeObject
}
// Got stuck here

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


