import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import './Products.css';
import bottle1 from '../../Images/bottle-1.png'
import bottle2 from '../../Images/bottle-2.png'
import bottle3 from '../../Images/bottle-3.png'
import bottle4 from '../../Images/bottle-4.png'

const Products = () => {
    const { ref, entry } = useInView({});
      console.log(entry);

      let bottleOneStyle, bottleTwoStyle, bottleThreeStyle, bottleFourStyle;

      if(entry?.isIntersecting) {
        bottleOneStyle = {
            "left": "50px",
            "bottom": "-40px"
        }
        bottleTwoStyle = {
            "left": "450px",
            "top": "0"
        }
        bottleThreeStyle = {
            "left": "850px",
            "bottom": "-40px"
        }
        bottleFourStyle = {
            "left": "1050px",
            "bottom": "-40px"
        }
      }

    return (
        <div ref={ref} className='products'>
            <h1>Bottles</h1>
            <div className='bottles'>
                <div style={bottleOneStyle} className='bottle-1'></div>
                <img style={bottleTwoStyle} className='bottle-2' src={bottle2} alt="" />
                <img style={bottleThreeStyle} className='bottle-3' src={bottle3} alt="" />
                <img style={bottleFourStyle} className='bottle-4' src={bottle4} alt="" />
            </div>
        </div>
    );
};

export default Products;