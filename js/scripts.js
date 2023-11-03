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
  this.user = [];
  this.pizza = [];
}

Order.prototype.addUser = function(user) {
  this.user = this.user.push(user);
}
Order.prototype.addPizza = function(pizza) {
  this.pizza = this.pizza.push(pizza);
}