import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, comment, rating, img } = props.review;
    return (
        <div className='review-card'>
            <img src={img} alt="" />
            <p> <i> "{comment}"</i> </p>
            <p>Rating: {rating}</p>
            <p> <b>{name}</b></p>

        </div>
    );
};

export default Review;