// joinus.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './joinus.css';

function Joinus() {
    return (
        <div className="join">
            <h1>Join us via</h1>
            <div className="icon">
                <li><a href="#"><FontAwesomeIcon icon={faDiscord} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
            </div>
            <div className='icon2'>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms of Use</a></li>
            </div>
        </div>
    );
}

export default Joinus;
