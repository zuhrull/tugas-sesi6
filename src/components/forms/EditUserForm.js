import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
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
      <Container>
        <Row>
          <Col className="d-grid"><Button variant="success" size="sm" type="submit">Update Fighter</Button>{' '}</Col>
          <Col className="d-grid">
            <Button variant="danger" size="sm"
            onClick={() => props.setEditing(false)}
            className="button muted-button"
            >
            Cancel
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default EditUserForm;
