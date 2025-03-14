const mongoose = require('mongoose');
const BankSchema = new mongoose.Schema({
    value: String,
  });
  module.exports = mongoose.model('Bank', BankSchema);