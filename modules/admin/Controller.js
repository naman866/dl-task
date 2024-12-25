const Controller = require("../base/Controller");

class AdminController extends Controller{
  async setDiscountedOrderNo() {
    const { dicountedOrderNo } = this.req.body;
    if (!dicountedOrderNo) {
      return res.status(400).json({
        message: 'Invalid request body. Please provide an order_number.',
      });
    }
    global.discountedOrderNumber = dicountedOrderNo;
    return this.res.status(200).json({
      message: 'Order number set successfully!',
      globalOrderNumber: global.discountedOrderNumber,
    });
  }

  async getAllOrderDetails(){
    try {
      const jsonData = {
        totalOrders: global.totalOrders,
        totalItemPurchased: global.totalItemPurchased,
        totalPurchasedAmount: global.totalPurchasedAmount,
        discountCodes: global.discountCodes ,
        totalDiscountAmount: global.totalDiscountAmount,
      }
      this.res.status(200).send({status: true, data: jsonData});
    } catch (error) {
      console.log('Error in getAllORderDetails  -- >', error);
      this.res.status(500).send({status: false, message: "Internal server error"});
    }
  }
}

module.exports = AdminController