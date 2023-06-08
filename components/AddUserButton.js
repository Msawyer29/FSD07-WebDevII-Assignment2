import React from 'react'; // import React

// AddUserButton is a functional component that takes in one prop: onAddUser
// onAddUser is a function that is invoked when the button is clicked
const AddUserButton = ({ onAddUser }) => {
  return (
    <button onClick={onAddUser} className="add-user-button">Add User</button> // // Button that when clicked, triggers the onAddUser function
  );
};

export default AddUserButton;
