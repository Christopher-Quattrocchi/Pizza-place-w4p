

# _Portfolio Project - End of Week Four_

#### _HTML, JS branching, objects, loops, and arrays. Bootstrap was used. Nov 3rd 2023_

#### By _**Chris Quattrocchi**_

## Description

_End of week four recap. JavaScript practice with loops, arrays, and branching. User can create as many pizzas as they'd like, must create a user profile, and the result along with price is returned._



## Setup/Installation Requirements

* _clone repository or use the download link_
* _extract zip file if required_
* _open index.html_


## Known Bugs

_Currently not known_

## Support and contact details

_chrisquattrocchi@gmail.com, phone number is 503-841-0072_

## Technologies Used

_HTML, CSS, Git, JS and Bootstrap were used in the creation of this page_

## Link to gh-pages


[gh-pages link]([
](https://christopher-quattrocchi.github.io/Pizza-place-w4p/)
https://christopher-quattrocchi.github.io/Pizza-place-w4p/)

### License

Copyright (c) 2023-3077 **_{Chris Quattrocchi}_**


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

SUCCESS
Test: I want it to display all pizzas ordered along with the user's name and address
Code:
Expected Output:
