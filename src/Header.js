import React from 'react'
import { Navbar,Nav,FormControl,Button,Form } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from 'react'
import './header.css'

let head={
  "position":"fixed",
   "top":"0%",
   "width":"100%",
   "backgroundColor":"rgb(179 172 172)",
   "bordercolor":"#80ae68",
   "zIndex":"4",
   "display":"grid",
   "height":"auto"
}

let navstyle={
  'color': 'rgb(117, 178, 231)',
  'fontSize':'1em'

}



export const Header = (props) => {
    const[Menu,setMenu]=useState(false)

    Header.defaultProps = {
        title: "Your Title Here",
        searchBar: false
      }
      
      Header.propTypes = {
        title: PropTypes.string.isRequired,
        searchBar: PropTypes.bool
      }

  return (
  <div className="Header" style={head}>
          
    <Navbar bg="dark" variant="dark">
    <Container fluid >
    <Navbar.Brand  href="/">{props.title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll"/>
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        // style={{ maxHeight: '100px'}}
        navbarScroll>
       {!Menu && 
       <div className="headbar">
          <Nav.Link href="/" style={navstyle}>Home</Nav.Link>
          <Nav.Link href="/play" style={navstyle}>Play Trumph Cards</Nav.Link>
          <Nav.Link href="/about" style={navstyle}>About</Nav.Link>
        </div>
      } 

        {/* <Nav.Link href="#" disabled>Link</Nav.Link> */}
      </Nav> 
           
      { (props.search)?
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
      :""
      }     
    </Navbar.Collapse> 
  </Container>
  <div className="hamburger-menu">
      <a href="#" onClick={() => setMenu(!Menu)}>
        <GiHamburgerMenu />
      </a>
  </div>
</Navbar>
{Menu && 
       <div className="mobile-headbar">
          <Nav.Link href="/" style={navstyle}>Home</Nav.Link>
          <Nav.Link href="/play" style={navstyle}>Play Trumph Cards</Nav.Link>
          <Nav.Link href="/about" style={navstyle}>About</Nav.Link>
        </div>
      }
</div>
  )
}

// <Form inline>
// <FormControl type="text" placeholder="Search" className="mr-sm-2" />
// <Button variant="outline-info">Search</Button>
// </Form>