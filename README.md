Describe: BuildPizza() will create a pizza object

SUCCESS--------
Test: "It will create a pizza object with toppings, size, veteran status, and first responder status"
Code: newPizza = new BuildPizza("sausage", "large", true, false);
Expected Output: newPizza {toppings: sausage, size: large, veteran = false, firstresponder = true};

SUCCESS---------
Describe: UserProfile() will create a user object
Test: "It will create a user object with name, address, and preferredCustomer status.
Code: myUser = new UserProfile("Christopher", "4939 Fake St", true);
Expected Output: myUser {Christopher, 4939 Fake St, preferredCustomer = true} 

SUCCESS
Describe: Order() will store user objects and pizza objects in parallel arrays

SUCCESS
Test: "It will store user objects and pizza objects in parallel arrays"
Code: myOrder = new Order(myPizza, myUser);
Expected: myOrder {myPizza, myUser}

SUCCESS
Describe: addUser and addPizza will push objects to Order()
Test: "store objects to Order"
Code: 
Expected Output: myOrder(Chris, myPizza);

Describe: Order.prototype.Cost() will take all the pizzas in the array stored in Order and calculate a cost

SUCCESS
Test: "It will calculate a price"
Code: myOrder.prototype.Cost()
Expected Output: $12 or whatever

SUCCESS
Test: I want to code to dynamically create as many pizza objects as a user wants, but only one user per order
Code:
Expected Output:
