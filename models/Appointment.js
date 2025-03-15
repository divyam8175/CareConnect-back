// backend/models/Appointment.js
const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["scheduled", "completed", "canceled"], default: "scheduled" }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
