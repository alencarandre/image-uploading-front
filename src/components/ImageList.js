import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './Image';

function ImageList() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Image />
        </Col>
        <Col md={3}>
          <Image />
        </Col>
        <Col md={3}>
          <Image />
        </Col>
        <Col md={3}>
          <Image />
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <Image />
        </Col>
        <Col md={3}>
          <Image />
        </Col>
        <Col md={3}>
          <Image />
        </Col>
        <Col md={3}>
          <Image />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageList;
