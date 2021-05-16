import React from 'react';
import "./stylecompo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar} from 'react-bootstrap';

  
class component extends React.Component {
  render()
   { 
    return (
    <div className="content" >
      
    <Container>
    <Navbar  className="App-nav" expand="lg" variant="dark" >
        <Navbar.Brand href="#">HOME</Navbar.Brand>
        <Navbar.Brand href="#">ABOUT</Navbar.Brand>
        <Navbar.Brand href="#" >CONTACT</Navbar.Brand>
      </Navbar>
    </Container>
   
    </div>
  
  
    )
   }
}

export default component;