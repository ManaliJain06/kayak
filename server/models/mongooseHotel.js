const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HotelReview = require('./mongooseHotelReview').schema;
const HotelRoom = require('./mongooseHotelRoom').schema;

const hotelSchema = new Schema({
  name: { type: String, required: true },
  stars: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: String, required: true },
  roomType: { type: String, required: true },
  price: { type: Number, required: true },
  reviews: [{type: HotelReview, default: []}],
  // rooms: [{type: HotelRoom, default: []}],
  // imageUrl: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
