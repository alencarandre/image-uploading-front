import React from 'react';
import Figure from 'react-bootstrap/Figure';

class Image extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Figure>
        <Figure.Image src={this.props.data.url} fluid />
        <Figure.Caption>
          <b>Author</b> {this.props.data.owner} <br />
          <b>Uploaded at</b> {this.props.data.uploaded_at} <br />
          <b>Description:</b>
          {this.props.data.description}
        </Figure.Caption>
      </Figure>
    );
  }
}

export default Image;
