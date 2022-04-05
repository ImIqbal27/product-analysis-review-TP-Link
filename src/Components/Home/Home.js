import React from 'react';
import './Home.css';
import tp from '../image/tplink.jpg';
import useReviews from '../hooks/useReviews';
import Review from '../Review-card/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='product'>

                <section className='product-description'>
                    <h2>Your Next Router</h2>
                    <h2 className='tp-link'>TP-Link Router</h2>
                    <p>TP-Link Archer AX20 met the 3 most important aspects of a good wireless router.The speed is excellent, the coverage is strong and the stability is great.At this price point, there's nothing that perform just as good as this Archer AX20.This will probably be best budget mid-range router that will recommend in 2022.</p>

                </section>
                <section className='tp-img'>
                    <img src={tp} alt="" />

                </section>
            </div>
            <div >
                <h2>Customer Reviews(3)</h2>
                <section className='customer-review-home'>
                    {
                        reviews.map(review => <Review
                            key={review.id} review={review}
                        ></Review>).slice(0, 3)
                    }

                </section>

            </div>
            <div>

                <button>  See All Reviews</button>

            </div>

        </div>
    );
};

export default Home;