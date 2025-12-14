import express from 'express';
const router = express.Router();
import Feedback from '../models/FeedBack.js';

// post 
router.post('/', async (req, res) => {
  try {
    const { name, email, rating, message, productId } = req.body;
    if (!name || !email || !rating || !message || !productId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Save to MongoDB
    const newFeedback = new Feedback({
      name,
      email,
      rating,
      message,
      productId
    });

    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully!", data: newFeedback });

  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// get
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const feedbacks = await Feedback.find({ productId }).sort({ timestamp: -1 });

    res.status(200).json(feedbacks);

  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
