const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const FlightPrice = require('./mongooseFlightPrice').schema;

const flightSchema = new Schema({
  flightNumber: { type: String, required: true, unique: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  departureAirport: { type: Schema.Types.ObjectId, ref: 'FlightAirport' },
  arrivalAirport: { type: Schema.Types.ObjectId, ref: 'FlightAirport' },
  airline: { type: Schema.Types.ObjectId, ref: 'FlightAirline' },
  prices: [FlightPrice],
  isDeleted: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
