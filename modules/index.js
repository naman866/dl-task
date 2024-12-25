const express = require("express");
const router = express.Router();
const fs = require("fs");

module.exports = (express) =>{
  const routes = fs.readdirSync(__dirname);

  routes.forEach((route) =>{
    if(route === "index.js" || route == "User" || route == "items" || route == 'base') return
    console.log("route----", route)
    router.use(`/${route}`, require(`./${route}/Routes.js`)(express));
  })

  return router;
}
