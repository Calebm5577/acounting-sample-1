import React from 'react'
import headerLogo from '../../images/accounting-logo.png'
import './Header.scss'

export const Header = () => {
    return (
        <div className="Header">
            <button className="Header-button">REQUEST A FREE CONSULTATION</button>
            <img src={headerLogo} alt="logo" className="Header-logo"/>
        </div>
    )
}
