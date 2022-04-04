import React from 'react';
import useReviews from '../hooks/useReviews';
import Review from '../Review-card/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h3>See All Customer Reviews { }</h3>
            <section className='customer-all-reviews'>
                {
                    reviews.map(review => <Review
                        key={review.id} review={review}
                    ></Review>)
                }
            </section>

        </div>
    );
};

export default Reviews;