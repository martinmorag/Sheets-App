import React from 'react';
import StatusForm from './StatusForm';
import LatestChanges from './LatestChanges';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <StatusForm />
      <LatestChanges />
    </div>
  );
};

export default App;