// navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Update scroll position state when the user scrolls
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMarketClick = () => {
    // Navigate to the "/market" route and scroll to a specific position
    navigate('/market');
    window.scroll({
      top: 685, // Adjust this value based on your layout
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleArrowRightClick = () => {
    // Navigate to the "/login" route
    navigate('/login');
  };

  return (
    <header className={`header ${scrollPosition > 0 ? 'scrolled' : ''}`}>
      <div className="logo">CRYPTIC<FontAwesomeIcon icon={faRegistered} /></div>
      <nav className="nav">
        <ul>
          <div className="home">
            <li><Link to="/">Home</Link></li>
            <li onClick={handleMarketClick}>Market</li>
            {/* <li onClick={handleArrowRightClick}><FontAwesomeIcon icon={faArrowRightToBracket} /></li> */}
            <li><Link to="/choose-us">Choose Us</Link></li>
          </div>
          <div className="icon">
            <li><a href="#"><FontAwesomeIcon icon={faDiscord} /></a></li>
            <li onClick={handleArrowRightClick}><FontAwesomeIcon icon={faArrowRightToBracket}  /></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
