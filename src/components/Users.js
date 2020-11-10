import {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'

function Users() {
  const [users, setUsers] = useState([]);
  const [lastnameFilter, setLastnameFilter] = useState('');

  // Simulate receiving users from backend
  function getAllUsers() {
    return JSON.stringify({
      users: [
        {fname: "Lorem", lname: "Ipsum", email: "Lorem@test.com"},
        {fname: "Dolor", lname: "Sit", email: "dolor@test.com"},
        {fname: "Amet", lname: "Consectetur", email: "amet@test.com"},
        {fname: "Adipisicing", lname: "Elit", email: "adipisicing@test.com"},
        {fname: "Eiusmod", lname: "Tempor", email: "eiusmod@test.com"},
        {fname: "Incididunt", lname: "Labore", email: "incididunt@test.com"},
        {fname: "Dolore", lname: "Magna", email: "dolore@test.com"},
        {fname: "Aliqua", lname: "Enim", email: "aliqua@test.com"},
        {fname: "Minim", lname: "Veniam", email: "minim@test.com"}
      ]
    });
  }

  useEffect(() => {
    setUsers(JSON.parse(getAllUsers()).users);
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Filter by Lastname..."
            onChange={(e) => {setLastnameFilter(e.target.value)}}
          />
        </Form.Group>
      </Form>
      <ListGroup>
        {users && users
          .filter((u) => u.lname.toLowerCase().includes(lastnameFilter.toLowerCase()))
          .map((u) => {
            return <ListGroup.Item>{u.fname+' '+u.lname+' <'+u.email+'>'}</ ListGroup.Item>;
          })
        }
      </ListGroup>
    </div>
  );
}

export default Users;
