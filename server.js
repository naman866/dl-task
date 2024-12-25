const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./modules/index")

global.users = [];
global.discountedOrderNumber = 0;
global.totalOrders = 0;
global.totalItemPurchased = 0,
global.totalPurchasedAmount = 0,
global.discountCodes = [];
global.totalDiscountAmount = 0;

app.use(express.json());
app.use('/api', routes(express))

app.listen(port, ()=>{
  console.log("server is running on port", port)
})