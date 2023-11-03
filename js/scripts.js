//Business Logic

//Pizza Constructor
function Pizza(size) {
  this.toppings = [];
  this.size = size;
}

//Pizza prototype methods
Pizza.prototype.setToppings = function (toppings) {
  this.toppings = toppings; //? [toppings] : [];
  return this;
}

Pizza.prototype.setSize = function (size) {
  this.size = size;
}

//UserProfile Constructor
function UserProfile(name, address) {
  this.name = name;
  this.address = address;
  this.veteranStatus = false;
  this.firstResponderStatus = false;
  this.preferredCustomer = false;
  // this.orderCount = 0;
}

UserProfile.prototype.setName = function (name) {
  this.name = name;
  return this;
}
UserProfile.prototype.setAddress = function (address) {
  this.address = address;
  return this;
}
UserProfile.prototype.setDiscount = function (veteranStatus, firstResponderStatus, preferredCustomer) {
  this.veteranStatus = veteranStatus;
  this.firstResponderStatus = firstResponderStatus;
  this.preferredCustomer = preferredCustomer;
  return this;
}

// UserProfile.prototype.setOrderCount = function (orderCount) {
//   this.orderCount = orderCount;
//   return this;
// }

//Order constructor
function Order(userObject, pizzaObject) {
  this.user = userObject;
  this.pizza = pizzaObject ? [pizzaObject] : [];
}

Order.prototype.setCost = function() {
  let totalCost = 0;
  const pizzaPrices = { small: 8, medium: 10, large: 12, extralarge: 14 };
  const toppingPrices = { pepperoni: 1, sausage: 1, jalepeno: 0.5, anchovies: 0.5 };

  for (let i = 0; i < this.pizza.length; i++) {
    let pizzaCost = pizzaPrices[this.pizza[i].size];


    for (let j = 0; j < this.pizza[i].toppings.length; j++) {
      let topping = this.pizza[i].toppings[j];
      pizzaCost += (toppingPrices[topping] || 0);
    }
    totalCost += pizzaCost;
  }

  let discounts = 0;
  if (this.user[0].veteranStatus) discounts += 1;
  if (this.user[0].firstResponderStatus) discounts += 1;
  if (this.user[0].preferredCustomer) discounts += 1;

  totalCost -= this.pizza.length * discounts || 0;

  this.totalCost = totalCost;
  console.log(totalCost);
  // return this
}



//TESTING MADE EASIER
let myUser = new UserProfile("Christopher", "5936 Bay Point Dr");
let myPizza = new Pizza("medium");

myUser.setName("Christopher");
myUser.setAddress("5936 Bay Point Dr");
myUser.setDiscount(true, true, true);
myPizza.setToppings("jalepeno", "anchovies");
myPizza.setSize("medium");
let myOrder = new Order(myUser, [myPizza]);
console.log(myOrder);
myOrder.setCost();


