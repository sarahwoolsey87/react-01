import React from 'react';
import './Form.css';

const Form = ({ handleFilterChange }) => {
  const options = ['All', '1', '2', '3', 'More']; 

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    handleFilterChange(selectedOption);
  };

  return (
    <form>
      <label htmlFor="filter">Filter by Number of Horns:</label>
      <select id="filter" onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Form;
