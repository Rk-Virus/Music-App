import React from 'react'
import { Nav, NavItem, NavLink,  } from 'reactstrap';
import { HouseExclamation, Search, Heart, PlayBtnFill } from 'react-bootstrap-icons';

function Sidebar() {
  return (
    <>
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
    </>
  )
}

export default Sidebar