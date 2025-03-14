
const express = require('express');
const Bank = require('../models/Bank');
const Branch = require('../models/Branch');
const router = express.Router();

router.get('/banks', async (req, res) => {
  const banks = await Bank.find();
  res.json(banks);
});

router.get('/branches', async (req, res) => {
  const { bank_id } = req.query;
  const branches = await Branch.find({ bank_id });
  res.json(branches);
});

module.exports = router;
