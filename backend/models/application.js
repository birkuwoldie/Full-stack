const mongoose = require('mongoose');
const ApplicationSchema = new mongoose.Schema({
    bank_name: String,
    branch_name: String,
    account_name: String,
    account_number: { type: String, unique: true },
    status: { type: String, enum: ['Draft', 'Submitted'] },
    created_at: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Application', ApplicationSchema);
  