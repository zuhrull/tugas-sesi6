import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", alias: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.alias) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Label>Nama</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <Form.Label>Julukan</Form.Label>
      <Form.Control
        type="text"
        name="alias"
        value={user.alias}
        onChange={handleInputChange}
      />
      <div className="d-grid gap-2">
        <Button size="sm" type="submit" style={{marginTop: '10px'}}>Add New Fighter</Button>
      </div>
    </Form>
  );
};

export default AddUserForm;
