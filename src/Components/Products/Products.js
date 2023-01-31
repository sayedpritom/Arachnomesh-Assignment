import React from 'react';
import { useInView } from 'react-intersection-observer';

import './Products.css';
import bottle1 from '../../Images/bottle-1.png'
import bottle2 from '../../Images/bottle-2.png'
import bottle3 from '../../Images/bottle-3.png'
import bottle4 from '../../Images/bottle-4.png'

const Products = () => {
    const { ref, entry } = useInView({});
    console.log(entry);

    let bottleOneStyle, bottleTwoStyle, bottleThreeStyle, bottleFourStyle, productsTitlesStyle;

    if (entry?.isIntersecting) {
        bottleOneStyle = {
            "left": "0%",
            "top": "0"
        }
        bottleTwoStyle = {
            "left": "30%",
            "top": "0"

        }
        bottleThreeStyle = {
            "left": "50%",
            "top": "0%"
        }
        bottleFourStyle = {
            "left": "85%",
            "top": "-5%"
        }
        productsTitlesStyle = {
            "top": "50%"
        }
    }

    return (
        <div ref={ref} className='products'>
            <div className='bottles'>
                <h1 style={productsTitlesStyle} className='products-title'>A smart <br />way to sip</h1>
                <div className='bottle-1'>
                    <img style={bottleOneStyle} src={bottle1} alt="" />
                </div>
                <div className='bottle-2'>
                    <img style={bottleTwoStyle} src={bottle2} alt="" />
                </div>
                <div className='bottle-3'>
                    <img style={bottleThreeStyle} src={bottle3} alt="" />
                </div>
                <div className='bottle-4'>
                    <img style={bottleFourStyle} src={bottle4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Products;