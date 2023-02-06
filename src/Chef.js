class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, isMorning) {
    if (isMorning) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    }
  }
  //The code is a function called greetCustomer which takes two arguments: customerName and isMorning. It returns a greeting string based on the value of isMorning. If isMorning is true, the function returns "Good morning, [customerName]!". If isMorning is false or undefined, the function returns "Hello, [customerName]!". The [customerName] placeholder is being populated by the customerName argument that is passed to the function.

  checkForFood(food) {
    for (const menuItem of this.restaurant.menu) {
      if (menuItem.name === food.name) {
        return `Yes, we're serving ${food.name} today!`;
      }
    }
    return `Sorry, we aren't serving ${food.name} today.`;
  }
}

//I'm stuck on this one

module.exports = Chef;