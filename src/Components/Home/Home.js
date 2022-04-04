import React from 'react';
import './Home.css';

import tp from '../image/tplink.jpg';

const Home = () => {
    return (
        <div>
            <div className='product'>

                <section className='product-description'>
                    <h2>Your Next Router</h2>
                    <h2>TP-link Router</h2>
                    <p>TP-Link Archer AX20 met the 3 most important aspects of a good wireless router.The speed is excellent, the coverage is strong and the stability is great.At this price point, there's nothing that perform just as good as this Archer AX20.This will probably be best budget mid-range router that will recommend in 2022.</p>

                </section>
                <section className='tp-img'>
                    <img src={tp} alt="" />

                </section>
            </div>
            <div>
                <h1>Customer Reviews(3)</h1>


            </div>

        </div>
    );
};

export default Home;