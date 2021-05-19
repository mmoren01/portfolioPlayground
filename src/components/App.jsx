import React from 'react';
import NavBar from './NavBar.jsx';
import AboutMe from './AboutMe.jsx';
import ContactMe from './ContactMe.jsx';
import Container from 'react-bootstrap/Container';

const App = () => (
  <Container className="app" fluid>
    <NavBar />
    <AboutMe />
    <ContactMe />
  </Container>
);

export default App;
