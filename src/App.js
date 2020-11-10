import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {LeftMenu, TopBar} from './components/Navigation';
import LoginPage from './components/LoginPage';
import Main from './components/Main';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Router>
      <div className="App">
        <TopBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} email={email}/>
        {loggedIn && <Container fluid={true}>
          <Row>
            <Col md={3}>
              <LeftMenu />
            </Col>
            <Col md={9}>
              <Main loggedIn={loggedIn} />
            </Col>
          </Row>
        </Container>}
        {!loggedIn && <LoginPage
          setEmail={setEmail}
          setLoggedIn={setLoggedIn}
        />}
      </div>
    </Router>
  );
}

export default App;
