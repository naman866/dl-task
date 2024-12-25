const CartController = require("./Controller");


module.exports = (express) => {
  const router = express.Router();

  router.post("/add-cart", (req, res, next)=>{
    const CartObj = new CartController(req, res, next);
    return CartObj.addToCart();
  });

  router.post("/checkout", (req, res, next)=>{
    const CartObj = new CartController(req, res, next);
    return CartObj.checkout();
  });


  return router;
};
