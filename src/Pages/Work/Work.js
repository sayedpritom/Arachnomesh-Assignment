import React, { useEffect, useState } from 'react';
import './Work.css'
import fountain from '../../Images/fountain.png'
import ocean1 from '../../Images/ocean.png'
import ocean2 from '../../Images/ocean-2.png'


const Work = () => {
    const [visisble, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((visisble) => setVisible(!visisble))
        }, 500);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='our-works'>
            <div>
                <div className='works-gallery'>
                    <h1 className='our-work-heading'>Our Work {visisble && <span className='underscore'></span>}</h1>
                    <div className='works'>
                        <div className='work work1'>
                            <div>
                                <p className='work-title'>Get <br /> Inspired</p>
                                <p className='work-description'>Satisfy all of your inspiration needs in one place. .</p>
                            </div>
                        </div>
                        <div className='work work2'>
                            <div>
                                <p className='work-title'>Nano <br /> Zero Filtration</p>
                                <p className='work-description'>Nano Zero Filtration is a completely reimagined plant-based filter.</p>
                            </div>
                        </div>
                        <div className='work work3'>
                            <div>
                                <p className='work-title'>PureV <br /> Technology</p>
                                <p className='work-description'>Proprietary PureV™ technology improves the quality of your water by preventing water.</p>
                            </div>
                        </div>
                        <div className='work work4'>
                            <div>
                                <p className='work-title'>Self-Cleaning <br /> Worry-Free</p>
                                <p className='work-description'>Neutralizes up to 99%* of bacteria such as E.coli using PureV technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collage">
                    <div className='collage-a'>
                        <p className='collage-text'>One million single use plastic bottles are thrown out every minute!</p>
                    </div>
                    <div className='collage-image'>
                        <img src={ocean1} alt="" />
                    </div>
                    <div className='collage-c'>
                        <p className='collage-text'>How to live sustainably during a pandemic. <br /><a className='read-more' href='#'>Read More.</a></p>
                    </div>
                    <div className='collage-image'>
                        <img src={ocean2} alt="" />
                    </div>
                    <div className='collage-b'>
                        <p className='collage-text'>The Plastic free year Challenges is Here. REGISTER NOW!</p>
                    </div>
                    <div className='collage-image'>
                        <img src={fountain} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;