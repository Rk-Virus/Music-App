import React from 'react'
import { Nav, NavItem, NavLink,  } from 'reactstrap';
import { Col, Row, Container } from 'react-bootstrap';
import { HouseExclamation, Search, Heart, PlayBtnFill } from 'react-bootstrap-icons';

function Home() {
  return (
    <>
      <Container fluid>
        <Row >
          <Col sm={4} style={{backgroundColor: 'rgb(10, 10, 100, 0.2)',paddingTop:100}}>
            <Nav vertical style={{  height:'100vh',  }}>
              <NavItem>
                <NavLink href="#">
                  <HouseExclamation /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Search />Search
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Heart />Favorites
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                >
                  <PlayBtnFill />Playlists
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home