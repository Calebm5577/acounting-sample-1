import React from 'react'
import img from '../../images/client-logo.png'
import './Clients.scss'

export const Clients = () => {
    return (
        <div className="Clients">
             <h1>CLIENTS</h1>
             <div className="Clients-div1">
                <div>
                    <img src={img} alt="img" />
                    <img src={img} alt="img" />
                    
                </div>
                <div>
                    <img src={img} alt="img" />
                    <img src={img} alt="img" />
                </div>
             </div>
        </div>
    )
}
