import React from 'react';
import Figure from 'react-bootstrap/Figure';

function Image() {
  return (
    <Figure>
      <Figure.Image src="/logo512.png" fluid />
      <Figure.Caption>
        <b>Created at</b> 2019-09-21 <br />
        <b>Author</b> André Alencar <br />
        <b>Description: </b>
        I like so much becouse it's fine and you would like too
      </Figure.Caption>
    </Figure>
  );
}

export default Image;
