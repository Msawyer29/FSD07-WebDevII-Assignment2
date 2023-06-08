import React from "react"; // import React

// SearchBar is a functional component that takes in one prop: onSearch
// onSearch is a function that is invoked when the text in the input field changes
const SearchBar = ({ onSearch }) => {
  return (
    <div id="searchInput">
      <input
        type="text"
        placeholder="Search for users..."
        onChange={(e) => onSearch(e.target.value)} // Input field that triggers the onSearch function when the text changes
      />
    </div>
  );
};

export default SearchBar;
