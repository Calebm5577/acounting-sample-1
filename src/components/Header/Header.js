import React from 'react'
import headerLogo from '../../images/accounting-logo.png'
import './Header.scss'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="Header">
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
                <button className="Header-button">REQUEST A FREE CONSULTATION</button>
            </Link>
            <img src={headerLogo} alt="logo" className="Header-logo"/>
        </div>
    )
}
