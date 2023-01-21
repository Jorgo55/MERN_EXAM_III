const User = require("../models/pirate.model");

module.exports.getAllpirates = (req, res) => {
  User.find()
    .sort({ name: 1 })
    .then((allpirates) => res.json(allpirates))
    .catch((err) => res.json({ message: "Missing pirates", err }));
};

module.exports.createpirate = (req, res) => {
  User.create(req.body)
    .then((newpirate) => res.json(newpirate))
    .catch((err) =>
      res.status(400).json({ message: "pirate not created!", err })
    );
};



module.exports.deletepirate = (req, res) => {
  User.deleteOne(req.body)
    .then((newBoook) => res.json(newBoook))
    .catch((err) =>
      res.status(400).json({ message: "pirate not deleted!", err })
    );
};

