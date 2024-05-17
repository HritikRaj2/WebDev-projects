// App.js (Main Component)
import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch initial job data from backend API
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="App">
      <h1>ConnectCareers</h1>
      <SearchBar />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
