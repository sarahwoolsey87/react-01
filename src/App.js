import React, { useState } from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Form from './Components/Form/Form';
import HornedBeast from './Components/HornedBeast/HornedBeast'; 
import data from './data.json';

const App = () => {
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All'); 

  const handleBeastSelection = (beast) => {
    setSelectedBeast(beast);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div>
      <Header />
      <Form handleFilterChange={handleFilterChange} /> {}
      <Main beastsData={data} filter={selectedFilter} onBeastSelect={handleBeastSelection} />
      {selectedBeast && <HornedBeast beast={selectedBeast} onClose={() => setSelectedBeast(null)} />}
      <Footer />
    </div>
  );
};

export default App;
