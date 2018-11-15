//make variables for required packages
var mysql = require('mysql');
var inquirer = require('inquirer');


//connect to mysql 
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("Welcome to the Bamazon Store! " + "\n");

  showProducts();
});

//function displaying the products available to buy

function showProducts() {
  connection.query("SELECT * FROM products",
    function (err, res) {
      console.log("PRODUCTS AVALIABLE IN BAMAZON STORE:" + "\n\n");

      for (var i = 0; i < res.length; i++) {
        console.log("Id: " + res[i].item_id + " | " + " Product Name: " + res[i].product_name + " | " + " Price: $ " + res[i].price + " | " + "Quantity in stock: " + res[i].stock_quantity + "\n=============================================================================\n");
      }
      iPrompt();
    })

};

//Display questions using inquirer


function iPrompt() {
  inquirer.prompt([
      //Ask them ID of the product they would like to buy
      {
        type: "input",
        name: "Product Id",
        message: "Using the ID's of the Products in the Bamazon Store choose what product you'd like to purchase.",
        //making sure the number used is valid using the validate method 
        validate: function (answers) {
          if (answers> 0 && answers <= 10) {
            return true;
          }
          return "Invalid ID number please try again.";
        },
      },
      //Ask them how many units of the product they would like to buy
      {
        type: "input",
        name: "Units",
        message: "How many units of the product would you like to buy?",
        //making sure the number used is valid using the validate method 
        validate: function (answers) {
          if (answers > 0 && answers<= item_id.length) {
            return true;
          }
          return "Invalid quantity please try again.";
        }
      }
    ])
 };


//updating database after purchase