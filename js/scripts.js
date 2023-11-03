function BuildPizza(toppings, size, veteranStatus, firstResponderStatus) {
  this.toppings = toppings;
  this.size = size;
  this.veteranStatus = veteranStatus;
  this.firstResponderStatus = firstResponderStatus;
}

function UserProfile(name, address, preferredCustomer) {
  this.name = name;
  this.address = address;
  this.preferredCustomer = preferredCustomer;
}

function Order(userObject, pizzaObject) {
  this.user = userObject ? [userObject] : [];
  this.pizza = pizzaObject ? [pizzaObject] : [];
}

Order.prototype.Cost() {
  
}

// Order.prototype.addUser = function(user) {
//   this.user.push(user);
// }
// Order.prototype.addPizza = function(pizza) {
//   this.pizza.push(pizza);
// }

//TESTING MADE EASIER
myUser = new UserProfile("Christopher", "5936 Bay Point Dr", true);
myPizza = new BuildPizza("pepperoni", "large", false, false);