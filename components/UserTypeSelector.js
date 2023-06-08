import { useState } from "react"; // import the necessary libraries

// UserTypeSelector component
const UserTypeSelector = ({ onUserTypeChange }) => {
  const [selectedUserType, setSelectedUserType] = useState(""); // local state to store the selected user type

  // handleSelectChange is a handler function to be called when the select input changes
  // It updates the local state and calls onUserTypeChange prop function to inform the parent component about the change
  const handleSelectChange = (event) => {
    setSelectedUserType(event.target.value);
    onUserTypeChange(event.target.value);
  };

  // The select input whose value is bound to the local state and onChange is bound to the handler function
  return (
    <div id="userSelect">
      <select value={selectedUserType} onChange={handleSelectChange}>
        <option value="">Select Student/Teacher</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
    </div>
  );
};

export default UserTypeSelector;
