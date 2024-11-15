import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="w-100 d-flex justify-content-center align-items-center p-3" style={{height:"100vh"}}>
      <div className="container-fluid w-75">
        <Row className='d-flex justify-content-center align-items-center'>
          <Col sm={6}>
          <h2>POST-APP</h2>
          <p style={{textAlign:"justify"}}>This Post App is a simple and intuitive application for managing posts,
             allowing users to create, view, update, and delete posts. Designed with a responsive card-based UI,
              it provides a clean and engaging experience for users on any device.</p>
          <Link className='btn btn-success' to={'/dash'}>Let's Go</Link>
          </Col>
          <Col sm={6}>
          <img src='./b2.png' alt="b1" className='img-fluid ' />
          </Col>
        </Row>
      </div>
    </div>
    
    </>
  )
}

export default Home