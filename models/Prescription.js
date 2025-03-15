// backend/models/Prescription.js
const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
  medications: [{ name: String, dosage: String, instructions: String }]
}, { timestamps: true });

module.exports = mongoose.model("Prescription", prescriptionSchema);
