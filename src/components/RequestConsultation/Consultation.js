import React from 'react'
import './Consultation.scss'
import { Link } from 'react-router-dom';

export const Consultation = () => {
    return (
        <div className="Consultation">
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
                <button>REQUEST A FREE CONSULTATION</button>
            </Link>
    
        </div>
    )
}
