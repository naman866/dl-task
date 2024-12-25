const Controller = require("../base/Controller");
const { products } = require("../items/Items");
const { users } = require("../User/User");
const crypto = require('crypto');

class CartController extends Controller{

  //Add to Cart API
  async addToCart() {
    try {
      const { userId, item_id } = this.req.body;
      let user = users.find(u => u.id === userId);
      if (!user) {
        user = { userId: userId, cart: []};
      }
      const product = products.find(p => p.item_id === item_id);
      const userCartDetail = global.users.find(u => u.userId == userId);
      let data = {}
      if(!userCartDetail){
        data = {userId: user.id, cart: [product]};
        global.users.push(data);
        return this.res.status(200).send({ status: true, message: 'Item added to cart', item: product });
      }
      let updatedUserData = [];
      for(let user of global.users){
        let userData = user;
        if(userData.userId == userId){
          userData.cart = [...userData.cart, product];
        }
        updatedUserData.push(userData);
      }
      global.users = updatedUserData;
      this.res.status(200).send({ status: true, message: 'Item added to cart', items: userCartDetail.cart });
    } catch (error) {
      console.log("Error in checkout =>", error);
      this.res.send({status: false, message: error});
    }
  }


  async checkout(){
    try {
      const { userId } = this.req.body;
      const cartDetails = global.users.find(u => u.userId == userId);
      let totalCartAmount = 0;
      for(let cartItem  of cartDetails.cart){
        totalCartAmount += cartItem.item_price;
      }
      global.totalOrders +=1;
      if(global.totalOrders % global.discountedOrderNumber == 0){
        totalCartAmount -= totalCartAmount * 10 / 100;
        global.totalDiscountAmount += totalCartAmount;
        const discountCodes = crypto.randomBytes(6).toString("hex").toUpperCase();
        global.discountCodes.push(discountCodes);
      }
      global.totalPurchasedAmount += totalCartAmount;
      global.totalItemPurchased += cartDetails.cart.length;

      global.users  = global.users.map(u=>{
        if(u.userId == userId){
          return {...u, cart:[]};
        }
        return u;
      })
      this.res.status(200).send({status: true, message: "Order Placed successfully"});
    } catch (error) {
      console.log("Error in checkout =>", error);
      this.res.send({status: false, message: error});
    }
  }
}

module.exports = CartController;