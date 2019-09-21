import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link'

function FormUpload() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Author name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Choose the image</Form.Label>
          <Form.Control type="file" />
          <Form.Text className="text-muted">
            Accept only .png .jpg .gif
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formUpload">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Write about the image" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        &nbsp;

        <Link to="/">
          Back
        </Link>
      </Form>
    </Container>
  )
}

export default FormUpload;
