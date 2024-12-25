const AdminController = require("./Controller");

module.exports = (express) => {
  const router = express.Router();

  router.post("/add-discount-order-no",(req, res, next) =>{
    const adminObj = new AdminController(req, res, next);
    return adminObj.setDiscountedOrderNo();
  });

  router.get("/get-orders-details", (req, res, next)=>{
    const adminObj = new AdminController(req, res, next);
    return adminObj.getAllOrderDetails();
  });


  return router;
};
