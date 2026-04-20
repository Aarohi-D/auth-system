const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false, // Password won't be returned by default in queries
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create User Model
const User = mongoose.model('User', userSchema);

module.exports = User;