import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="Footer">
            <ul>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="Link2">HOME</li>
                </Link>

                <Link to="/Resources" style={{ textDecoration: 'none' }}>
                    <li className="Link2">RESOURCES</li>
                </Link>
                <Link to="/About" style={{ textDecoration: 'none' }}>
                    <li className="Link2">ABOUT</li>
                </Link>
                <Link to="/Services" style={{ textDecoration: 'none' }}>
                    <li className="Link2">ACCOUNTING SERVICES</li>
                </Link>
                <Link to="/Contact" style={{ textDecoration: 'none' }}>
                    <li className="Link2">CONTACT</li>
                </Link>
                <Link to="/FAQ" style={{ textDecoration: 'none' }}>
                    <li className="Link2">FAQ</li>
                </Link>
                
            </ul>
            <div>
                <p>Address: 7 Random Avenue, Pearl Street, Cleveland, 0020</p>
            </div>
            <div>
            <Link to="/Privacy" style={{ textDecoration: 'none' }}>
                <p className="Font-size-12">Privacy Policy</p>
            </Link>
            <Link to="/Terms" style={{ textDecoration: 'none' }}>
                <p className="Font-size-12">Terms &amp; Conditions</p>
            </Link>
                
            </div>
            <p className="Font-size-11">© Your Website/Business 2017</p>
        </div>
    )
}
