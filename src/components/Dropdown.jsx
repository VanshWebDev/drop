import React, { useState, useRef } from "react";
import "./Dropdown.css";

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleTouchInteraction = (event) => {
    const touchY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
    seta(touchY);
    console.log("Interaction at:", touchY);

    const dropdownElement = dropdownRef.current;
    if (dropdownElement) {
      const rect = dropdownElement.getBoundingClientRect();
      const optionHeight = rect.height / options.length;
      const index = Math.floor((touchY - rect.top) / optionHeight);
      const newOption = options[Math.max(0, Math.min(options.length - 1, index))];
      setb(newOption);
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
      onTouchEnd={handleTouchInteraction}
    >
      <p>I at: {a}</p>
      <p>SO: {b}</p>
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
