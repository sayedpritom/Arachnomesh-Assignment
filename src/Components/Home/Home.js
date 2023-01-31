import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className='navbar'>
                <h2 className='logo'>Arachnomesh</h2>
                <ul>
                    <li className='active'>Home</li>
                    <li>About</li>
                    <li>Bottles</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className='login-btn'>Login</li>
                </ul>
            </div>
            <div className='home-banner'>
                <div className="bottle-and-cap">
                    <div className="cap"></div>
                    <div className="bottle"></div>
                </div>
            </div>
            <div>
                <div className='banner-contents'>
                    <div className="banner-texts">
                        <h1 className='banner-heading'>Self Cleaning bottle <br /> In 60 Seconds</h1>
                        <p className='banner-tagline'>Hit refresh with the intelligently clean bottle built for adventure.</p>
                    </div>
                    <button className='know-more-btn'>KNOW MORE</button>
                </div>
                <div className="circle"></div>
            </div>
        </div>
    );
};

export default Home;