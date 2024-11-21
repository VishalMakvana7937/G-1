import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const UpdateStudentForm = ({ student, onUpdate }) => {
  console.log('...',student);
  console.log('...',onUpdate);
  
  const navigate = useNavigate();

  const [updatedData, setUpdatedData] = useState({
    name: student.name || "",
    number: student.number || "",
    email: student.email || "",
    pass: student.pass || "",
  });

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(student.id, updatedData);
  };

  useEffect(() => {
    navigate("/StudentView");
  }, [navigate]);

  return (
    <Form onSubmit={handleUpdateSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Name"
            name="name"
            value={updatedData.name}
            onChange={handleUpdateChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Your Mobile Number"
            name="number"
            value={updatedData.number}
            onChange={handleUpdateChange}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={updatedData.email}
            onChange={handleUpdateChange}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            name="pass"
            value={updatedData.pass}
            onChange={handleUpdateChange}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default UpdateStudentForm;
