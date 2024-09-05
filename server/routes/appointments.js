const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/book', async (req, res) => {
  const { name, date } = req.body;
  const newAppointment = new Appointment({ name, date });
  await newAppointment.save();
  res.json({ message: 'Appointment booked successfully!' });
});

module.exports = router;
