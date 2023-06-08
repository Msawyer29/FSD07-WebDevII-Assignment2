import React from 'react'; // import necessary libraries

// UserCard component
const UserCard = ({ user, onImageClick }) => {
// This component represents a single user in the list (UserList.js)
// It receives a user object as a prop and a function to handle when the image is clicked
// The render of this component is the user's first name, last name, address and an image. 
// When the image is clicked, it triggers the onImageClick function
  
  return (
    <div>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>{user.address}</p>
      <img src={user.image} alt="User Image" onClick={() => onImageClick(user)} />
    </div>
  );
};

export default UserCard;
