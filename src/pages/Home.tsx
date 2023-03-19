import React from 'react'
import Sidebar from '../Components/Sidebar';
import { Col, Row, Container } from 'react-bootstrap';
import MusicCard from '../Components/MusicCard';
import CarouselHero from '../Components/CarouselHero';
import InfoCard from '../Components/InfoCard';


function Home() {
  return (
    <>
      {/* <Sidebar/> */}
      <Container fluid>
        <Row>
          <Col sm={3} lg={2} style={{ backgroundColor: 'rgb(10, 10, 100, 0.2)', paddingTop: 100 }}>
            <Sidebar />
          </Col>
          <Col sm={9} lg={10} className="my-2 mx-0">
            <Row>
              <CarouselHero />
            </Row>
            <Row className="m-2">
              <h3>Top Trending</h3>
              {/* <MusicCard /> */}
              {[1,2,3,4,5,6].map(()=>{
                return(
                  <Col>
                <InfoCard/>
              </Col>
                )
              })}
              
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home