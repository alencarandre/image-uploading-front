import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from './Image';
import imageUploadingServiceApi from '../lib/image_uploading_service_api'

class ImageList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }

    this.loadStates()
  }

  async loadStates() {
    this.setState({ images: await imageUploadingServiceApi.images() })
  }

  renderImages() {
    let elements = [];
    let rows = [];
    let row = 0;
    let count = 0;

    rows[0] = [];

    for(let i in this.state.images) {
      rows[row].push(<Col md={3}><Image data={this.state.images[i]}/></Col>);
      count++;

      if(count == 4) {
        count = 0;
        rows[++row] = [];
      }
    }

    for(let i in rows) {
      elements.push(<Row>{rows[i]}</Row>);
    }

    return elements;
  }

  render() {
    return (
      <Container>
        {this.renderImages()}
      </Container>
    );
  }
}

export default ImageList;
