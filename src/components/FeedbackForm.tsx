import React, { useState } from 'react';
import StarRating from './StarRating';
import { FeedbackData } from '../utils/types';
import { Send, Check } from 'lucide-react';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackData>({
    overallRating: 0,
    usefulnessRating: 0,
    accuracyRating: 0,
    completenessRating: 0,
    comments: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingChange = (
    ratingType: keyof Omit<FeedbackData, 'comments'>,
    value: number
  ) => {
    setFeedback((prev) => ({
      ...prev,
      [ratingType]: value,
    }));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback((prev) => ({
      ...prev,
      comments: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Feedback submitted:', feedback);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFeedback({
          overallRating: 0,
          usefulnessRating: 0,
          accuracyRating: 0,
          completenessRating: 0,
          comments: '',
        });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-xl font-serif font-semibold text-gray-900">Journalist Feedback</h2>
        <p className="text-sm text-gray-600 mt-1">
          Your assessment helps improve the quality of our dossiers.
        </p>
      </div>
      
      {isSubmitted ? (
        <div className="p-8 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Thank You!</h3>
          <p className="text-center text-gray-600">
            Your feedback has been submitted successfully.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-5 space-y-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Usefulness
              </label>
              <StarRating
                rating={feedback.usefulnessRating}
                onChange={(rating) => handleRatingChange('usefulnessRating', rating)}
                size={24}
                id="usefulness-rating"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Completeness
              </label>
              <StarRating
                rating={feedback.completenessRating}
                onChange={(rating) => handleRatingChange('completenessRating', rating)}
                size={24}
                id="completeness-rating"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments
            </label>
            <textarea
              id="comments"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Share your thoughts about this dossier..."
              value={feedback.comments}
              onChange={handleCommentChange}
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || (feedback.usefulnessRating === 0 && feedback.completenessRating === 0)}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white 
                ${feedback.usefulnessRating === 0 && feedback.completenessRating === 0
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}
                transition-colors duration-200`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Submit Feedback
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;