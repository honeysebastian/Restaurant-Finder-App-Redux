import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Home() {
  return (
    <>
      <div className='w-100' style={{marginTop:'100px'}}>
        <div className="banner">
          <div className="home-title">
          Discover Your Next <br /> Favorite Meal
          </div>
          <p>Explore. Taste. Enjoy.</p>
        </div>
      <div className='container'>
         <Row>
          <h2 style={{borderBottom:'1px solid grey'}} className='my-5 text-center pb-5'>Personalized Recommendations Just for You</h2>
          <Col sm={12} md={3} lg={4} className='mt-5'>
            <div className="restaurant shadow rounded">
  
            </div>
          </Col>
         </Row>
      </div>
      </div>
    </>
  )
}

export default Home