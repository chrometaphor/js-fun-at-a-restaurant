function takeOrder(order, orderList) {
  if (orderList.length >= 3) {
    return;
  }
  orderList.push(order);
}

// The function takeOrder takes two parameters: order and orderList. It first checks if the length of orderList is greater than or equal to 3. If it is, the function returns without executing any further code. If it is not, the function pushes the order object into the orderList array using the push method.

function refundOrder(orderNumber, orderList) {
  for (var i = 0; i < orderList.length; i++) {
    if (orderList[i].orderNumber === orderNumber) {
      orderList.splice(i, 1);
    }
  }
}
The function "refundOrder" takes two parameters: "orderNumber" and "orderList". It loops through the orderList array using a for loop and the loop counter "i".

// It checks if the orderNumber of the current order in the orderList is equal to the passed in orderNumber using an if statement.
// If the orderNumber of the current order in the orderList matches the passed in orderNumber, the function uses the splice method to remove the current order from the orderList.
// The splice method takes two arguments: the first is the index of the element to be removed and the second is the number of elements to remove. In this case, we are removing a single element from the orderList at the current index "i".
// Once the loop has finished, the orderList array will have the order with the matching orderNumber removed.

function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(", ");
}
// This function uses a for loop to iterate over the deliveryOrders array and extract the item property of each order. The items are stored in the items array. Finally, the join method is used to concatenate the items into a string separated by commas.

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true;
    }
  }
  return false;
}
// This function takes an array of delivery orders and an item to search for. It uses a for loop to iterate over the deliveryOrders array and check if the item property of each order matches the item being searched for. If a match is found, the function returns true. If the loop completes without finding a match, the function returns false.


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}