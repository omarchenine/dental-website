const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  date: Date,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
