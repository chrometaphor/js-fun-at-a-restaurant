function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
}
// Function takes in a name argument and returns an object that represents a restaurant. The object has two properties:
// name: This property is equal to the name argument passed to the function.
// menus: This property is an object with three properties - breakfast, lunch, and dinner - which are all initialized as empty arrays. These properties represent the different types of menus offered by the restaurant.

function addMenuItem(restaurant, item) {
  let menu = restaurant.menus[item.type];
  if (!menu.includes(item)) {
    menu.push(item);
  }
}

// The addMenuItem function is used to add menu items to a restaurant object. The restaurant object must have a menus property, which is an object with properties for each menu type (e.g. "breakfast", "lunch", "dinner"). Each menu type property is an array that holds menu items for that menu type.
// When the addMenuItem function is called, it takes two arguments: the restaurant object and a menu item object. The menu item object must have properties for the name, price, and type of the menu item.
// The function adds the menu item to the appropriate menu type array in the menus property of the restaurant object. If the menu type array doesn't exist yet, the function creates it. The function also checks to make sure the same menu item isn't added twice.


function removeMenuItem(restaurant, name, type) {
  var menus = restaurant.menus;

  if (!menus[type]) {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`;
  }

  var menuType = menus[type];
  var itemIndex = menuType.findIndex(item => item.name === name);

  if (itemIndex === -1) {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`;
  }

  menuType.splice(itemIndex, 1);
  return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
}

// removeMenuItem allows removing a specific menu item from a restaurant object. The restaurant object is created using the createRestaurant function and its menu is manipulated using the addMenuItem function. The removeMenuItem function takes three parameters, the first is the restaurant object, the second is the name of the menu item to be removed and the third is the type of the menu item (breakfast, lunch, or dinner).
// The function first checks if the menu item is already in the menu by looping through the items in the specific menu type (breakfast, lunch, or dinner). If the menu item is not in the menu, the function returns an error message saying that the item is not sold at the restaurant. If the menu item is found in the menu, it is removed and a success message indicating that the item has been removed from the specific menu type is returned.

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}