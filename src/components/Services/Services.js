import React from 'react'
import './Services.scss'
import img1 from '../../images/accounting-and-bookkeeping.jpg'
import img2 from '../../images/accounting-service2.jpg'
import img3 from '../../images/accounting-service3.jpg'
import img4 from '../../images/accounting-service4.jpg'
import img5 from '../../images/accounting-service5.jpg'
import img6 from '../../images/accounting-service6.jpg'

export const Services = () => {
    return (
        <div className="Services-wrapper">
            <h1>SERVICES</h1>
            <div className="Services">
                <span>
                
                    <div>
                        <img src={img1} alt="img1" />
                        <h3>ACCOUNTING &amp; BOOKEEPING</h3>
                    </div>
                    <div>
                        <img src={img2} alt="img2" />
                        <h3>SERVICE #2</h3>
                    </div>
                    <div>
                        <img src={img3} alt="img3" />
                        <h3>SERVICE #3</h3>
                </div>

                </span>

                <span>
                    <div>
                        <img src={img4} alt="img4" />
                        <h3>SERVICE #4</h3>
                    </div>
                    <div>
                        <img src={img5} alt="img5" />
                        <h3>SERVICE #5</h3>
                    </div>
                    <div>
                        <img src={img6} alt="img6" />
                        <h3>OTHER SUPPORT SERVICES</h3>
                    </div>
                </span>

            </div>
        </div>
    )
}
