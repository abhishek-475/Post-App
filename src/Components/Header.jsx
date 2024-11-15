import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <i className="fa-regular fa-clipboard" style={{color: "#1371b9",}} />
           {' '}
            POST-APP
          </Navbar.Brand>
        </Container>
      </Navbar>

    
    </>
  )
}

export default Header