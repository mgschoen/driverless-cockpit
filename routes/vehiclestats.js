var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let vehicle = req.app.get('vehicle');
  res.json({
    steerAngle: vehicle.steerAngle,
    pathMiddleX: vehicle.pathMiddleX,
    pathMiddleY: vehicle.pathMiddleY,
    vehicleX: vehicle.vehicleX,
    vehicleY: vehicle.vehicleY
  });
});

module.exports = router;
