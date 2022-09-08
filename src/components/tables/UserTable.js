import React from "react";
import { Table, Button } from 'react-bootstrap';

const UserTable = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Nama</th>
        <th>Julukan</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.alias}</td>
            <td>
              <Button variant="success" size="sm"
                className="button muted-button"
                onClick={() => props.editRow(user)}
              >
                Edit
              </Button>{' '}
              <Button variant="danger" size="sm"
                className="button muted-button"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Fighters</td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default UserTable;