import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestChanges = () => {
  const [latestChanges, setLatestChanges] = useState([]);
  const [sinceTimestamp, setSinceTimestamp] = useState('');
  const limit = 10; // Define your limit here

  useEffect(() => {
    const fetchLatestChanges = async () => {
      try {
        const trimmedTimestamp = sinceTimestamp.trim(); // Trim white spaces
        const response = await axios.get(`http://localhost:5000/latest-changes?sinceTimestamp=${encodeURIComponent(trimmedTimestamp)}&limit=${limit}`);
        setLatestChanges(response.data);
      } catch (error) {
        console.error('Error fetching latest changes:', error);
      }
    };

    if (sinceTimestamp.trim()) { // Check if trimmed timestamp is not empty
      fetchLatestChanges();
    }
  }, [sinceTimestamp]);

  return (
    <div>
      <h2>Latest Changes</h2>
      <input type="datetime-local" value={sinceTimestamp} onChange={(e) => setSinceTimestamp(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Estado</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {latestChanges.map((row, index) => (
            <tr key={index}>
              <td>{row[1]}</td> {/* Assuming Email is in the second column */}
              <td>{row[8]}</td> {/* Assuming Estado is in the ninth column */}
              {/* Adjust index according to your sheet's structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestChanges;