const Shop = require("../Models/shops");

exports.homePage = async (req, res) => {
    const stores = ["Dunkin", "Tim Hortons", "Starbucks"];
    try {
      console.log(req.name);
      res.json(stores);
    } catch (error) {
      console.log(error);
    }
  };

  exports.createShop = async (req, res) => {
      try {
        await shop.save();
        res.json(`You have saved the shop ${shop}`);
        const shop = new Shop(req.body);
      } catch (error) {
        res.status(500).json(error);
      }
  }