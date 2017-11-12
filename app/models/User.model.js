import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  country: {type: String, required: true},
  highScore: {type: Number, required: true},
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);
