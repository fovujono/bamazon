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
        name: "ProductId",
        message: "Using the ID's of the Products in the Bamazon Store choose what product you'd like to purchase.",
        //making sure the number used is valid using the validate method 
        validate: function (answers) {
          if (answers > 0 && answers <= 10) {
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
        //making sure the number inputed is valid using the validate method 
        validate: function (answers) {
          if (answers > 0) {
            return true;
          }
          return "Invalid quantity please try again.";
          
        }
      }
    ])
    .then(function (answers) {
      var item = answers.ProductId;
      var quantity = answers.Units;

      connection.query("SELECT * FROM products WHERE item_id =" + item, function (err, res) {
        //check if stock quanitiy has enough
        if (quantity > res[0].stock_quantity) {
          console.log("Sorry we do not have enough product to fulfill that order");
          restart();
        //show customers order
        } else {
          console.log("\n YOUR ORDER: \n")
          console.log("\n YOU HAVE PURCHASED " + quantity + " UNITS OF PRODUCT ID: " + item  + "\n\n")
          console.log("\n TOTAL COST:" + quantity * res[0].price + "\n\n");
          //updating database after purchase and showing total
          connection.query("UPDATE products SET ? WHERE ?",[{stock_quantity:res[0].stock_quantity - quantity},{item_id: item}]
          )
          console.log("============================================================")
          restart();
        }
      })
     
    })
 
};


//make function so users can continue to shop if there is an error or if they just bought something
function restart(){
  inquirer.prompt([
    {
    type:"confirm",
    name:"restart",
    message:"Continue shopping?",
    }
  ])
  .then(function (answers){
    if (answers.restart){
      showProducts();

    }
    else{
      console.log("Please come back soon! :-)")
      connection.end
    }
  })
};

