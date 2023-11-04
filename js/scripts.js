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

//Order constructor
function Order(userObject, pizzas) {
  this.user = userObject;
  this.pizza = pizzas;
  orderCost = "";
}

Order.prototype.setCost = function () {
  let totalCost = 0;
  const pizzaPrices = { small: 8, medium: 10, large: 12, "extra-large": 14 };
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
  this.orderCost = totalCost;
  console.log(totalCost);
}

//UI Logic
window.addEventListener("load", function () {
  document.getElementById("pizza-form").addEventListener("submit", createPizzas);
  document.getElementById("user-form").addEventListener("submit", createUser);
  userButton = document.getElementById("order-button");
  userButton.disabled = true;
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

  document.getElementById("order-button").disabled = false;
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
  newOrder.showOrder();
  pizzas = [];
  document.getElementById("user-button").disabled = true;
}

Order.prototype.showOrder = function () {
  const showOutput = document.getElementById("show-output");

  let pName = document.createElement("p");
  let pAddress = document.createElement("p");
  let pCost = document.createElement("p");

  pCost.textContent = "Your total is: $" + this.orderCost;

  pName.textContent = "Name: " + this.user.name;
  pAddress.textContent = "Address: " + this.user.address;

  console.log(pName, pAddress);
  showOutput.append(pName, pAddress, pCost);



  this.pizza.forEach((pizza, index) => {
    let pPizzas = document.createElement("p");

    let pizzaText = "You ordered a " + pizza.size + " pizza";
    if (pizza.toppings.length > 0) {
      const toppingsText = pizza.toppings.join(", ");
      pizzaText += " with " + toppingsText + ".";
    }
    pPizzas.textContent = pizzaText;

    showOutput.appendChild(pPizzas);
  });


}