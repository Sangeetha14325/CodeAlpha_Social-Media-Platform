import React from 'react';
import './App.css';
import DashboardHeader from './components/DashboardHeader';
import DashboardContent from './components/DashboardContent';

function App() {
  return (
    <div className="App">
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
}

export default App;
