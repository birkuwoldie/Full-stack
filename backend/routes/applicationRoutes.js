const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

router.post('/applications/submit', async (req, res) => {
  const { bank_name, branch_name, account_name, account_number, status } = req.body;
  await Application.create({ bank_name, branch_name, account_name, account_number, status });
  res.json({ message: 'Application submitted successfully' });
});

module.exports = router;