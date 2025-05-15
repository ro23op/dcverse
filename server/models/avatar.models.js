import mongoose from 'mongoose';

const avatarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true,
    enum: ['Amateur', 'Professional', 'Expert']
  }
});

const Avatar = mongoose.model('Avatar', avatarSchema);
export default Avatar;