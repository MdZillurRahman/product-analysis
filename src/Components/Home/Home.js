import React from 'react';
import image from '../../images/Men-Genuine-Leather-Travel-Bag-in-Bangladesh.png';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='writtenPart'>
                <h1>Best Choice In Your <span className='travelling'>Travelling</span></h1>
                <p>We serve the best travelling bag in Bangladesh. Those travelling bag will be your best friend through your travelling journey.</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;