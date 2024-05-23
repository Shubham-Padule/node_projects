const express = require('express');
const router = express.Router();
const customerRec = require("./modules/customer");

router.get("/customers", function(req, res) {
    var arr = customerRec.getAllCustomer();
    var jObj = JSON.stringify(arr);
    res.send(jObj);
});

router.get("/customers/:id", function(req, res) {
    var customerId = req.params.id;
    var customer = customerRec.getCustomer(customerId);
    if (customer) {
        res.send(JSON.stringify(customer));
    } else {
        res.status(404).send("Customer not found");
    }
});

module.exports = router;
