// JobList.js (Component to display job listings)
import React from 'react';
import JobItem from './JobItem';

function JobList({ jobs }) {
  return (
    <ul>
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
