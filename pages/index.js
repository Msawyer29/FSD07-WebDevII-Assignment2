import { useState, useRef } from 'react';
import UserTypeSelector from '../components/UserTypeSelector';
import UserList from '../components/UserList';
import UserDetailModal from '../components/UserDetailModal';
import AddUserButton from '../components/AddUserButton';
import SearchBar from '../components/SearchBar';

const IndexPage = () => {
  // Sample users
  const initialUsers = [
    { userType: "student", firstName: "John", lastName: "Smith", age: 19, address: "1 rue McGill", image: "/jsmith.jpg" },
    { userType: "teacher", firstName: "Marilyn", lastName: "Monroe", age: 29, address: "34 Vine St", image: "/mmonroe.jpg" },
    { userType: "teacher", firstName: "George", lastName: "Harrison", age: 80, address: "1 Main St", image: "/gharrison.jpg" },
    { userType: "student", firstName: "Paul", lastName: "McCartney", age: 80, address: "12 rue Saint-James", image: "/pmccartney.jpg" },
    { userType: "teacher", firstName: "Ringo", lastName: "Starr", age: 82, address: "123 Queens Blvd", image: "/rstarr.jpg" },
    { userType: "student", firstName: "John", lastName: "Lennon", age: 82, address: "1234 Liverpool Ave", image: "/jlennon.jpg" },
  ];

  // Setting state using useState hooks
  const allUsers = useRef(initialUsers); // maintains all users, define the allUsers as a useRef hook, acts as a persistent value that exists for the full lifetime of the component
  const [users, setUsers] = useState([]); // maintains users that are displayed
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserType, setSelectedUserType] = useState('');

  // Handler to add a user
  const handleAddUser = () => {
    // Hardcoding a new user
    const newUser = {
      userType: 'student',
      firstName: 'Mackenzie',
      lastName: 'Sawyer',
      age: 30,
      address: '1 New Street',
      image: '/msawyer.jpg'
    };

    // Adding new user to users list
    allUsers.current = [...allUsers.current, newUser];
    setUsers([...users, newUser]);

    // Refreshing the filtered users list
    handleUserTypeChange(selectedUserType);
  };

  // Handler to filter users based on user type
  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
    if (userType) {
      setUsers(allUsers.current.filter(user => user.userType === userType));
    } else {
      setUsers([]); // clear the users list when the dropdown is set to default
    }
  };

  // Handler to filter users based on search query
  const handleSearch = (query) => {
    // if search bar is empty do not display users, even if data is entered in search bar and then backspaced to clear, does not display users
    if (query === '' && !selectedUserType) {
        setUsers([]);
        return;
      }
    
      const lowerCaseQuery = query.toLowerCase();
      let filteredUsers;

    if (!selectedUserType) {
      filteredUsers = allUsers.current.filter(user =>
        user.firstName.toLowerCase().includes(lowerCaseQuery) || 
        user.lastName.toLowerCase().includes(lowerCaseQuery)
      );
    } else {
      filteredUsers = allUsers.current.filter(user => 
        (user.firstName.toLowerCase().includes(lowerCaseQuery) || 
        user.lastName.toLowerCase().includes(lowerCaseQuery)) && 
        user.userType === selectedUserType
      );
    }

    setUsers(filteredUsers);
  };

  // Handler to show user details
  const handleImageClick = (user) => {
    setSelectedUser(user);
  };

  // Handler to close the user details modal
  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="content-box">
      <h1>Address Book</h1>
      <UserTypeSelector onUserTypeChange={handleUserTypeChange} /> {/* User type selector component with change handler */}
      <SearchBar onSearch={handleSearch} /> {/* Search bar component with search handler */}
      <AddUserButton onAddUser={handleAddUser} /> {/* Button for adding a user with click handler */}
      {/* Modal for displaying user details, which is shown when a user is selected */}
      {selectedUser && 
        <UserDetailModal 
          user={selectedUser} 
          onClose={handleCloseModal}
        />
      }
      {/* List of users with click handler for showing user details */}
      <UserList 
        users={users} 
        onImageClick={handleImageClick} 
      /> 
    </div>
  );
};

export default IndexPage;