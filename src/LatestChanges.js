import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LatestChanges.css'

const LatestChanges = () => {
  const [latestChanges, setLatestChanges] = useState([]);
  const limit = 10; // Define your limit here

  useEffect(() => {
    const fetchLatestChanges = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/latest-changes?limit=${limit}`);
        setLatestChanges(response.data);
      } catch (error) {
        console.error('Error fetching latest changes:', error);
      }
    };

    fetchLatestChanges();
  }, []); // Fetch changes on component mount

  return (
    <div className='changes'>
      <h2>Ultimas Modificaciones</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Estado</th>
            <th>Ultima Modificacion</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {latestChanges.slice(1).map((row, index) => ( // Exclude header row in display
            <tr key={index}>
              <td>{row[1]}</td> {/* Assuming Email is in the second column */}
              <td>{row[8]}</td> {/* Assuming Estado is in the ninth column */}
              <td>{row[latestChanges[0].indexOf('Ultima Modificacion')]}</td> {/* Assuming Ultima Modificacion is in the correct index */}
              {/* Adjust index according to your sheet's structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestChanges;
