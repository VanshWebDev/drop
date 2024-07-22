import React, { useState, useRef } from "react";
import "./Dropdown.css";

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const [interactionY, setInteractionY] = useState("");
  const [calculatedOption, setCalculatedOption] = useState("");
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  
  const handleTouchInteraction = (event) => {
    const touchY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    setInteractionY(touchY);

    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      const rect = dropdownElement.getBoundingClientRect();
      const optionHeight = rect.height / options.length;
      const index = Math.floor((touchY - rect.top) / optionHeight);
      const newOption = options[Math.max(0, Math.min(options.length - 1, index))];
      setCalculatedOption(newOption);
    }
  };

  const handleTouchEnd = (event) => {
    const touchY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    console.log("Touch End at:", touchY);

    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      const rect = dropdownElement.getBoundingClientRect();
      const optionHeight = rect.height / options.length;
      const index = Math.floor((touchY - rect.top) / optionHeight);
      const newOption = options[Math.max(0, Math.min(options.length - 1, index))];

      console.log("Selected Option:", newOption);
      setSelectedOption(newOption);
    }
  };

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onTouchStart={handleTouchInteraction}
      onTouchMove={handleTouchInteraction}
      onTouchEnd={handleTouchEnd}
    >
      <p>I Y-: {interactionY}</p>
      <p>Option: {calculatedOption}</p>
      <div className="dropdown-display">
        {selectedOption ? `Selected: ${selectedOption}` : "Select an option"}
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
