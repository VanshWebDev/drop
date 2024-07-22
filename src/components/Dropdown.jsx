import React, { useState, useRef } from 'react';
import "./Dropdown.css"
const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleTouchStart = (event) => {
    console.log('Touch Start:', event.touches[0].clientY);
  };

  const handleTouchMove = (event) => {
    console.log('Touch Move:', event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const touchY = event.changedTouches[0].clientY;
    console.log('Touch End:', touchY);

    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      const rect = dropdownElement.getBoundingClientRect();
      const optionHeight = rect.height / options.length;
      const index = Math.floor((touchY - rect.top) / optionHeight);
      const newOption = options[Math.max(0, Math.min(options.length - 1, index))];

      console.log('Selected Option:', newOption);
      setSelectedOption(newOption);
    }
  };

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="dropdown-display">
        {selectedOption ? `Selected: ${selectedOption}` : 'Select an option'}
      </div>
      <div className="dropdown-options">
        {options.map((option, index) => (
          <div key={index} className="dropdown-option">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
