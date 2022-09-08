import React, { useState } from "react";
import { Card } from "react-bootstrap";
import NavBar from "./tables/NavBar";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "Thomas", alias: "Bedebah" },
    { id: 2, name: "Bujang", alias: "Babi Hutan" },
    { id: 3, name: "Zuhrul", alias: "Batozar" }
  ];

  const [users, setUsers] = useState(usersData);
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", alias: "" };
 
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, alias: user.alias });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <>
    <NavBar brand={'Fighter List'} />
    <div className="container">
        {editing ? (
            <Card>
              <Card.Header as="h5" className="text-center">Edit Fighter</Card.Header>
              <Card.Body>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Header as="h5" className="text-center">Add Fighter</Card.Header>
              <Card.Body>
                <AddUserForm addUser={addUser} />
              </Card.Body>
            </Card>
        )}        
        <Card>
          <Card.Header as="h5" className="text-center">View Fighters</Card.Header>
          <Card.Body>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
          </Card.Body>
        </Card>
    </div>
    </>
  );
};

export default App;
