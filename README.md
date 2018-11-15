# Bamazon 
Bamazon is a CLI (command line interface) Amazon-like store that uses Node.js and MySQL. Bamazon takes in a customers order and also depletes it from the store's inventory. 

## Getting Started

You will need to use the bamazon.sql file attached to create a database that will store the items Bamazon has for sale.

Then you will install all of the npm packages in the package.json files by doing the following in your terminal (make sure you are opening from the correct destination):


## Running the Bamazon Application

Once you have your database up and your packages installed you can start using Bamazon.


Open your terminal (make sure you are opening from the correct destination) and run the javacript file:


The app will then prompt the user the first question:




If the ID you enter is not a valid ID you will get this in return:



After this the app will prompt the user the second question:


If the store does not currently have the ammount of product asked for in its inventory, it will disply the following:



The store also updates it inventory when an order is fullfilled:
















