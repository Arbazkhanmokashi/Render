// src/pages/RideSearch.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import api from '../services/api';

function RideSearch() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    // Call backend API to search for rides
    try {
      const response = await api.get(`/rides?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for rides:', error);
    }
  };

  const handleRideClick = (rideId) => {
    // Redirect to ride details page
    history.push(`/ride/${rideId}`);
  };

  return (
    <div>
      <Navbar />
      <h2>Find Rides</h2>
      <input type="text" placeholder="Enter Location" value={searchQuery} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(ride => (
          <li key={ride.id} onClick={() => handleRideClick(ride.id)}>
            {ride.origin} to {ride.destination} - {ride.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RideSearch;
