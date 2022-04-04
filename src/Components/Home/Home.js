import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/Men-Genuine-Leather-Travel-Bag-in-Bangladesh.png';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {

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
            <section>
                <h1>Customer Review (3)</h1>
                {
                    <Reviews></Reviews>
                }
                <Link to='/reviews'><button className='btn'>See all Reviews</button></Link>
            </section>
        </div>
    );
};

export default Home;