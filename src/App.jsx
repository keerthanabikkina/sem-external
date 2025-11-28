import React, { useState } from 'react';
import './App.css'; // Assume we will put the table/input CSS here

// Sample student data (move this to a separate data file for a larger project)
const initialStudents = [
  { roll: '1001', name: 'Alice Johnson', grade: 'A' },
  { roll: '1002', name: 'Bob Williams', grade: 'B+' },
  { roll: '1003', name: 'Charlie Brown', grade: 'A-' },
  { roll: '1004', name: 'David Miller', grade: 'B' },
  // ... more students ...
];

function App() {
  // State to hold the current search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle changes in the input field
  const handleSearchChange = (event) => {
    // Updates the state in real-time on every keystroke
    setSearchTerm(event.target.value);
  };

  // Filter the students based on the search term
  const filteredStudents = initialStudents.filter(student => {
    const searchLower = searchTerm.toLowerCase();

    // Check if the search term is present in name or roll number (case-insensitive)
    return (
      student.name.toLowerCase().includes(searchLower) ||
      student.roll.includes(searchLower)
    );
  });

  return (
    <div className="container">
      <h1>Student Directory Search (React)</h1>

      {/* Search Input managed by React State */}
      <input
        type="text"
        placeholder="Search by name or roll number..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="searchInput"
      />

      <table className="studentTable">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the filtered list to render table rows */}
          {filteredStudents.map((student) => (
            <tr key={student.roll}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
          
          {/* Display message if no results are found */}
          {filteredStudents.length === 0 && (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>No students match your search criteria.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;