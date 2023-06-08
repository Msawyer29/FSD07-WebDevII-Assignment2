import React from "react"; // important necessary libraries

// UserDetailsModal component
const UserDetailModal = ({ user, onClose }) => {
  // This component represents a modal that shows the details of a user
  // It receives a user object as a prop and a function to handle when the close button is clicked
  // The render of this component is the user's first name, last name, age, address and an image
  // It also has a close button that when clicked, triggers the onCloseModal function

  if (!user) {
    return null;
  }

  const modalStyles = {
    display: user ? "block" : "none", // Inline styles for modal visibility
  };

  // function to close the modal when clicking outside of it
  const handleOverlayClick = (e) => {
    // only close if the user clicked directly on the overlay, not on the modal itself
    if (e.target.className === 'modal') {
      onClose();
    }
  }

  return (
    <div className="modal" style={modalStyles} onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>Age: {user.age}</p>
        <p>Address: {user.address}</p>
        <img src={user.image} alt={user.firstName} />
      </div>
    </div>
  );
};

export default UserDetailModal;
