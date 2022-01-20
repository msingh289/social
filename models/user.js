const mongoose = require("mongoose");

const mediSchema={
      name: {
        type: String,
        required: true,
        min: 3,
        max: 20
      },
      email: {
        type: String,
        required: true,
        max: 50
      },
      followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    request: {
      type: Array,
      default: []
    }
};
const Medi = mongoose.model("Medi", mediSchema);
module.exports = mongoose.model("Medi", mediSchema);
