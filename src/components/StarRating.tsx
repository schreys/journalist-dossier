import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  onChange?: (rating: number) => void;
  id?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 24,
  onChange,
  id,
}) => {
  const handleClick = (index: number) => {
    if (onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className="flex items-center" data-testid={id}>
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index)}
          className={`focus:outline-none transition-transform hover:scale-110 ${onChange ? 'cursor-pointer' : 'cursor-default'}`}
          aria-label={`${index + 1} stars`}
        >
          <Star
            size={size}
            className={`transition-colors duration-200 ${
              index < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-transparent text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;