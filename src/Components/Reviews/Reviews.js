import React from 'react';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='allReviews'>
            <div>
                <h2>Review</h2>
            </div>
            <div className='reviews'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;