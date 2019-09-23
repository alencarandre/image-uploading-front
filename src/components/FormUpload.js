import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Link from 'react-router-dom/Link'
import { withRouter } from 'react-router-dom';
import imageUploadingServiceApi from '../lib/image_uploading_service_api'

class FormUpload extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInput = React.createRef();

    this.state = {
      ownerName: '',
      imageDescription: '',
      errorMessages: []
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    let images = []
    const files = this.fileInput.current.files

    for(let i = 0; i < files.length; i++) {
      images[i] = {
        description: this.state.imageDescription,
        file: files[i]
      }
    }

    const data = {
      name: this.state.ownerName,
      images: images
    }

    imageUploadingServiceApi
      .upload(data)
      .then(() => { this.props.history.push('/') })
      .catch((error) => {
        if(error.response.status == 400) {
          this.setState({ errorMessages: error.response.data.errors })
        } else {
          this.setState({ errorMessages: ['The server gives unexpected answer. Try again or contact us to support'] })
        }
      })

    event.preventDefault()
  }

  renderErrorMessage() {
    let errorMessages = []
    for(let i = 0; i < this.state.errorMessages.length; i++) {
      errorMessages.push(
        <li>{this.state.errorMessages[i]}</li>
      )
    }

    return errorMessages;
  }

  renderAlert() {
    if(this.state.errorMessages.length > 0) {
      return (
        <Alert variant="danger">
          The image cannot be loaded: <br />
          <ul>
            { this.renderErrorMessage() }
          </ul>
        </Alert>
      )
    }
  }

  render() {
    return (
      <Container>
        {this.renderAlert()}

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Author name</Form.Label>
            <Form.Control type="text" name="ownerName" value={this.state.ownerName} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Choose the image</Form.Label>
            <Form.Control type="file" multiple="true" ref={this.fileInput} />
            <Form.Text className="text-muted">
              Accept only .png .jpg .gif
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formUpload">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="imageDescription" value={this.state.imageDescription} onChange={this.handleChange} />
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
}

export default withRouter(FormUpload);
