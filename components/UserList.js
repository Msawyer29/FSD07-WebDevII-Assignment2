// import necessary libraries
import React from "react";
import UserCard from "./UserCard";

// UserList component
const UserList = ({ users, onImageClick }) => {
  // This component receives an array of users as a prop and a function to handle when the image of a user is clicked
  // For each user in the users array, a UserCard component is rendered (see UserCard.js)
  return (
    <div id="userList">
      {users.map((user, index) => (
        <div key={index} onClick={() => onImageClick(user)}>
          <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p>{user.userType}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
