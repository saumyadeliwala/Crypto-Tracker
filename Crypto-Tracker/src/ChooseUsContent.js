// ChooseUsContent.js
import React from 'react';
import { Link } from 'react-router-dom';
import './chooseus.css';
import chooseMainImage from './choose-main.png'; // Import the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet ,faPen,faFilePen,faMobileScreenButton,faSackDollar,faLayerGroup} from '@fortawesome/free-solid-svg-icons';

const ChooseUsContent = () => {
  return (
    <div className='choose'>
      <h1>Why <span>Choose Us</span></h1>
      <div className="content-wrapper">
        <ul>
          <li>CONNECT YOUR WALLET<FontAwesomeIcon className='wallet'icon={faWallet} /></li>
          <li>SELECT YOUR QUANTITY<FontAwesomeIcon className='wallet' icon={faPen} /></li>
          <li>CONFIRM TRANSACTION<FontAwesomeIcon className='wallet' icon={faFilePen} /></li>
        </ul>
        <img src={chooseMainImage} alt="Choose Main" className="column-image" />
        <ul>
          <li>RECEIVE YOUR OWN NFTS<FontAwesomeIcon className='wallet' icon={faMobileScreenButton} /></li>
          <li>TAKE A MARKET TO SELL<FontAwesomeIcon className='wallet' icon={faSackDollar} /></li>
          <li>DRIVE YOUR COLLECTION<FontAwesomeIcon className='wallet' icon={faLayerGroup} /></li>
        </ul>
      </div>
      {/* Link to the home page */}
    </div>
  );
};

export default ChooseUsContent;
