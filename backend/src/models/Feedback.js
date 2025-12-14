import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  productId: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now 
  }
});

//adding an index

feedbackSchema.index({ productId: 1 });

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;