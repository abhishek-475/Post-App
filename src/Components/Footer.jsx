import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className="d-flex bg-dark text-light justify-content-center align-items-center mt-4">
      <div className="conatiner p-4">
        <Row>
          <Col sm={6}>
          <h2>About us</h2>
          <p>
          This Post App is a simple and intuitive application for managing posts, allowing users to create, view, update, and delete posts. Designed with a responsive card-based UI, it provides a clean and engaging experience for users on any device.
          </p>
          </Col>
          <Col sm={2} className='d-flex flex-column  align-items-center '>
          <h2 className='text-primary'>Follow us</h2>
          <Link style={{textDecoration:"none"}} className='mb-2 mt-3'  to='https://www.instagram.com/'><i className="fa-brands fa-instagram" /></Link>
          <Link style={{textDecoration:"none"}} className='mb-2' to='https://www.facebook.com/'><i className="fa-brands fa-facebook" /></Link>
          <Link style={{textDecoration:"none"}} className='mb-2'  to='https://x.com/'><i className="fa-brands fa-x-twitter" /></Link>
          </Col>
          <Col sm={4}>
          <h2 className='text-success mb-4'>Feedback</h2>
          <input type="email" placeholder='Enter your email' className='form-control mb-3' />
          <textarea type="text" placeholder='feedback' className='form-control mb-3' />
          <button className='btn btn-success'>Submit</button>
          
          </Col>
        </Row>
      </div>
    </div>
    
    
    </>
  )
}

export default Footer