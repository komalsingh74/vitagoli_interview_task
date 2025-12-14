import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';

const FeedbackForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    message: ''
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email address";
    if (formData.rating === 0) newErrors.rating = "Please select a rating";
    if (formData.message.length < 10) newErrors.message = "Feedback must be at least 10 chars";
    return newErrors;
  };

  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productId: id })
      });

      if (response.ok) {
        navigate('/thank-you', { state: { name: formData.name, rating: formData.rating } });
      } else {
        const errorData = await response.json();
        console.error("Server error:", errorData);

      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-3xl shadow-2xl p-8 relative">

        <button onClick={() => navigate('/')} className="absolute top-6 left-6 text-gray-400 hover:text-gray-800">
          <ArrowLeft />
        </button>

        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">We Value You!</h2>
        <p className="text-center text-gray-500 mb-8">Share your experience with Product #{id}</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text" name="name"
              className={`w-full p-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-indigo-500 outline-none transition-all`}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email" name="email"
              className={`w-full p-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-indigo-500 outline-none transition-all`}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={32}
                  className={`cursor-pointer transition-colors ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  onClick={() => {
                    setFormData({ ...formData, rating: star });
                    setErrors({ ...errors, rating: null });
                  }}
                />
              ))}
            </div>
            {errors.rating && <p className="text-red-500 text-xs mt-1 text-center">{errors.rating}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
            <textarea
              name="message" rows="3"
              className={`w-full p-3 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-indigo-500 outline-none transition-all`}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300 disabled:bg-indigo-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;