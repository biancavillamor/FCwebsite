import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../assets/img/fndtnslogo1.png";
import "../assets/css/fonts.css"

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #333E4D;
    font-family: Bebas Neue;
    font-size: 15pt;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar>
      <Navbar.Brand href="/">
        <img src = {logo} alt="foundations logo" width="296" height="43"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/workshops">Workshops</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/apply">Apply</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
