const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, default: null },
  lastname: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  sexe: {type: String},
  role: {type: String}, 
  dateNaissance: {type: Date},
  createdAt: {type: Number},
  updatedAt: {type: Number},
  subscription: {type: Number, default: 0},
  token: { type: String },
},{
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

module.exports = mongoose.model("user", userSchema);