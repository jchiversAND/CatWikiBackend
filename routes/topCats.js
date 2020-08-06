var express = require("express");
var router = express.Router();
var connection = require("../dbInfo");

router.get("/", function (req, res) {
  connection.query(
    "SELECT * FROM sql_invoicing.payment_methods AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The topCats results is: ", results);
      res.status(200).send({ cat: results[0] });
    }
  );
});

module.exports = router;
