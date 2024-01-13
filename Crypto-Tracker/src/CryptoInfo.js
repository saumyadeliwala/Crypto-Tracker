import React, { useState, useEffect } from 'react';
import cryptoImages from './cryptoImages';
import './edit.css';

const CryptoInfo = () => {
  const [coinData, setCoinData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = () => {
      fetch('https://api.coincap.io/v2/assets')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const tetherIndex = data.data.findIndex(coin => coin.symbol === 'USDT');
          if (tetherIndex !== -1) {
            data.data[tetherIndex].changePercent24Hr = 0.07;
          }

          setCoinData(data.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData(); 
  }, []);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    window.scroll({
      top: 685,
      left: 0,
      behavior: "smooth",
    }); 
  };

  const totalPages = 2;

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-item ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCoins = coinData.slice(startIndex, endIndex);

  return (
    <div className="market-content__coin-list">
      <div className="market-content__coin-list__top">
        <p>Coin</p>
        <p>Price</p>
        <p>Change</p>
        <p>Market Cap</p>
      </div>
      <div className="market-content__coin-list__row">
        {displayedCoins.map(coin => (
          <a key={coin.id} className="coin-row" href={`/coin/${coin.id}`}>
            <span>
              <img src={cryptoImages[coin.symbol.toLowerCase()]} alt={coin.name} /> {coin.name}
            </span>
            <p>${parseFloat(coin.priceUsd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className={`slider-coin__price ${coin.changePercent24Hr > 0 ? 'green-text' : 'red-text'}`}>
              {parseFloat(coin.changePercent24Hr).toFixed(2)} %
            </p>
            <p>${parseInt(coin.marketCapUsd).toLocaleString()}</p>
          </a>
        ))}
      </div>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default CryptoInfo;
