import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link'

function Topbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />

            {' Image uploading '}
        </Navbar.Brand>
      </Link>

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/upload">
            <Button>
              <img
                alt=""
                src="/cloud-upload.svg"
                width="25"
                height="25"
                className="d-inline-block align-top"
              />
              {' Upload '}
            </Button>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
