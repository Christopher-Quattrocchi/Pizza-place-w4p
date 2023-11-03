//Business Logic

//Pizza Constructor
function Pizza() {
  this.toppings = [];
  this.size = size;
}

//Pizza prototype methods
BuildPizza.prototype.setToppings = function (toppings) {
  this.toppings = toppings ? [toppings] : [];
  return this;
}

BuildPizza.prototype.setSize = function (size) {
  this.size = size;
}

//UserProfile Constructor
function UserProfile() {
  this.name = name;
  this.address = address;
  this.veteranStatus = false;
  this.firstResponderStatus = false;
  this.preferredCustomer = false;
  this.orderCount = 0;
}

UserProfile.prototype.setName = function (name) {
  this.name = name;
  return this;
}
UserProfile.prototype.setAddress = function (address) {
  this.address = address;
  return this;
}
UserProfile.prototype.setPreferredCustomer = function (preferredCustomer) {
  this.preferredCustomer = preferredCustomer;
  return this;
}

UserProfile.prototype.setOrderCount = function (orderCount) {
  this.orderCount = orderCount;
  return this;
}

//Order constructor
function Order(userObject, pizzaObject) {
  this.user = userObject ? [userObject] : [];
  this.pizza = pizzaObject ? [pizzaObject] : [];
}

Order.prototype.setCost() {
  let totalCost = 0;
  const pizzaPrices = { small: 8, medium: 10, large: 12, extralarge: 14 };
  const toppingPrices = { pepperoni: 1, sausage: 1, jalepeno: 0.5, anchovies: 0.5 };

  for (let i = 0; i < this.pizza.length; i++) {
    let pizzaCost = pizzaPrices[this.pizza[i].size];
    pizzaCost += toppingPrices[topping] || 0;
  }


}

//TESTING MADE EASIER
myUser = new UserProfile("Christopher", "5936 Bay Point Dr", true);
myPizza = new BuildPizza("pepperoni", "large", false, false);