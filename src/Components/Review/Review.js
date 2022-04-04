import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Review.css'

const Review = (props) => {
    const { name, rating, body } = props.review;
    return (
        <div className='review'>
            <div>
                <h2>Name: {name}</h2>
                <h4>Ratings: <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating></h4>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Review;