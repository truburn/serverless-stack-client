import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

const App = () => (
  <div className="App container py-3">
    <Navbar
      collapseOnSelect
      bg="light"
      expand="md"
      className="mb-3"
    >
      <Navbar.Brand className="font-weight-bold text-muted">
        Scratch
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={window.location.pathname}>
          <LinkContainer to="/signup">
            <Nav.Link>Signup</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes />
  </div>
);

export default App;
