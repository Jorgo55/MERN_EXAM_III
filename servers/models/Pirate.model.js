const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const pirateSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is mandatory!"],
    minLength: [3, "name can't be less than 3 chars!"],
    unique: true,
  },
  image: {
    type: String,
    required: [true, "image is mandatory!"],
  },
  position: {
    type: String,
    enum: [
      "captain",
      "firstmate",
      "quartermaster",
      "boatswain",
      "powdermonkey",
      "",
    ],
    required: [true, "position is mandatory!"],
  },
  treasurechests: {
    type: String,
    // required: [true],

    // required: true,
  },
  pegleg: {
    type: String,
    // required: [true],
  },
  hookhand: {
    type: String,
    // required: [true],
  },
  eyepatch: {
    type: String,
    // required: [true],
  },
  phrase: {
    type: String,
    required: [true, "phrase is mandatory!"],
    minLength: [3, "phrase can't be less than 3 chars!"],
  },
});
pirateSchema.plugin(uniqueValidator);
const pirate = mongoose.model("pirate", pirateSchema);

module.exports = pirate;
