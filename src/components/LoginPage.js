import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Emulating request to login endpoint at backend
  const userIsAuthed = (email, password) => {
    return "admin@test.com" === email && "temp123" === password;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userIsAuthed(email, password)) {
      setPassword('');
      props.setLoggedIn(true);
      props.setEmail(email);
    }
  };

  return (
    <Jumbotron>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>Login</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default LoginPage;
