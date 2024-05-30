import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import { searchProduct } from '../redux/slice/productSlice';

function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-light shadow w-100 position-fixed top-0" style={{ zIndex: '10',height:'100px' }}>
        <Container>
          <Navbar.Brand><Link className='fw-bold' to={'/'} style={{ textDecoration: 'none', color: 'red' }}><i className='fa-solid fa-truck-fast me-2'></i><span className='text-dark'>QUICK</span> MUNCH</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             <Nav.Link>
                <input  style={{ width: '500px' }} type="text" className='border rounded p-2' placeholder='Search products here!!' />
              </Nav.Link>
              {/* <Nav.Link><Link className='fw-bold' style={{ textDecoration: 'none', color: 'white' }} to={'/wishlist'}><i className='fa-solid fa-heart text-danger'></i>Wishlist <Badge>10</Badge></Link></Nav.Link>
              <Nav.Link><Link className='fw-bold' style={{ textDecoration: 'none', color: 'white' }} to={'/cart'}><i className='fa-solid fa-cart-plus text-success'></i>Cart<Badge>10</Badge></Link></Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header




  