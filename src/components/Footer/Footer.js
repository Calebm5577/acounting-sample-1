import React from 'react'
import './Footer.scss'

export const Footer = () => {
    return (
        <div className="Footer">
            <ul>
                <li>ABOUT</li>
                <li>ACCOUNTING SERVICES</li>
                <li>BLOG</li>
                <li>RESOURCES</li>
                <li>FAQ</li>
                <li>CONTACT</li>
            </ul>
            <div>
                <p>Address: 7 Random Avenue, Pearl Street, Cleveland, 0020</p>
            </div>
            <div>
                <p className="Font-size-12">Privacy Policy</p>
                <p className="Font-size-12">Terms &amp; Conditions</p>
            </div>
            <p className="Font-size-11">© Your Website/Business 2017</p>
        </div>
    )
}
