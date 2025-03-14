const mongoose = require('mongoose');
const BranchSchema = new mongoose.Schema({
    value: String,
    bank_id: mongoose.Schema.Types.ObjectId,
  });
  module.exports = mongoose.model('Branch', BranchSchema);
  