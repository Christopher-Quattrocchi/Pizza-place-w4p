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


Describe: Order() will store user objects and pizza objects in parallel arrays

NEED prototype functions to make this work
Test: "It will store user objects and pizza objects in parallel arrays"
Code: myOrder = new Order(myPizza, myUser);
Expected: myOrder {myPizza, myUser}

PASSED
Describe: addUser and addPizza will push objects to Order()
Test: "store objects to Order"
Code: 
Expected Output: myOrder(Chris, myPizza);