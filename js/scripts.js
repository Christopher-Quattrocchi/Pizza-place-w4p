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
function Order(userObject, pizzas) {
  this.user = userObject;
  this.pizza = pizzas;
}

Order.prototype.setCost = function () {
  let totalCost = 0;
  const pizzaPrices = { small: 8, medium: 10, large: 12, extralarge: 14 };
  const toppingPrices = { pepperoni: 1, sausage: 1, jalepeno: 0.5, anchovies: 0.5 };

  this.pizza.forEach(pizza => {
    let pizzaCost = pizzaPrices[pizza.size] || 0;
    pizza.toppings.forEach(topping => {
      pizzaCost += toppingPrices[topping] || 0;
    });
    totalCost += pizzaCost;
  });

  let discounts = 0;
  if (this.user.veteranStatus) discounts += 1;
  if (this.user.firstResponderStatus) discounts += 1;
  if (this.user.preferredCustomer) discounts += 1;

  totalCost -= this.pizza.length * discounts || 0;

  this.totalCost = totalCost;
  console.log(totalCost);

}


//TESTING MADE EASIER
// let myUser = new UserProfile("Christopher", "5936 Bay Point Dr");
// myUser.setDiscount(true, true, true);

// let myPizza = new Pizza("medium");
// myPizza.setToppings(["jalepeno", "pepperoni"]);

// let myOrder = new Order(myUser, [myPizza]);
// myOrder.setCost();

//UI Logic
window.addEventListener("load", function () {
  this.document.getElementById("pizza-form").addEventListener("submit", createPizzas);
  this.document.getElementById("user-form").addEventListener("submit", createUser);
});


let pizzas = [];

function createPizzas(e) {
  e.preventDefault();
  const size = document.getElementById("size").value;
  const toppingsElements = document.querySelectorAll('input[name="toppings"]:checked');
  const toppings = Array.from(toppingsElements).map(element => element.value);

  let newPizza = new Pizza(size);
  newPizza.setToppings(toppings);

  pizzas.push(newPizza);
  console.log(newPizza);
}

function createUser(e) {
  e.preventDefault();
  const userName = document.getElementById("name").value;
  const userAddress = document.getElementById("address").value;

  const isVeteran = document.querySelector('input[name="veteran"]').checked;
  const isFirstResponder = document.querySelector('input[name="firstresponder"]').checked;
  const isPreferredCustomer = document.querySelector('input[name="preferred"]').checked;

  let newUser = new UserProfile(userName, userAddress);
  newUser.setDiscount(isVeteran, isFirstResponder, isPreferredCustomer);

  let newOrder = new Order(newUser, pizzas);
  newOrder.setCost();
  pizzas = [];
} 
