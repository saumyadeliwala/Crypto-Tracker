import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Joinus from './joinus';
import ChooseUsContent from './ChooseUsContent';
import CryptoInfo from './CryptoInfo';
import Login from './login'; 
import Signup from './Signup'; 
import Body from './body';

const App = () => {
  return (
    <Router>
      <div>
        <div className="ok">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose-us/" element={<ChooseUsLayout />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div>
    <Body />
    <div className="Market">
      <h1>Market Update</h1>
      <CryptoInfo />
    </div>
    <div className="joinus">
      <Joinus />
    </div>
  </div>
);

const ChooseUsLayout = () => (
  <div>
    <div>
      <ChooseUsContent />
    </div>
  </div>
);

const Market = () => (
  <div>
    <Body />
    <div className="Market">
      <h1>Market Update</h1>
      <CryptoInfo />
    </div>
    <div className="joinus">
      <Joinus />
    </div>
  </div>
);

export default App;