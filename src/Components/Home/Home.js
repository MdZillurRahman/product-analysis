import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import image from '../../images/Men-Genuine-Leather-Travel-Bag-in-Bangladesh.png';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <div className='home'>
                <div className='writtenPart'>
                    <h1>Best Choice In Your <br /> <span className='travelling'>Travelling</span></h1>
                    <p>We serve the best travelling bag in Bangladesh. Those travelling bag will be your best friend through your travelling journey.</p>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
            <section className='customerReview'>
                <div><h1>Customer Review (3)</h1></div>
                <div>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div><Link to='/reviews'><button className='btn'>See all Reviews</button></Link></div>
            </section>
        </div>
    );
};

export default Home;