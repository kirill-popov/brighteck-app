import {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form'


function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [lastnameFilter, setLastnameFilter] = useState('');

  // Simulate receiving drivers and saving them to state
  function getAllDrivers() {
    return JSON.stringify({
      drivers: [
        {fname: "Sahil", lname: "Draper", phone: "406-684-8256"},
        {fname: "Idris", lname: "Holt", phone: "406-684-8256"},
        {fname: "Sidrah", lname: "Duggan", phone: "720-522-9686"},
        {fname: "Safwan", lname: "Bray", phone: "541-692-1805"},
        {fname: "Rajan", lname: "Hines", phone: "313-896-5241"},
        {fname: "Hugo", lname: "Cotton", phone: "702-642-5492"},
        {fname: "Daniella", lname: "Ellison", phone: "580-549-4226"},
        {fname: "Rhea", lname: "Hudson", phone: "617-928-2171"},
        {fname: "Reeva", lname: "Woodard", phone: "402-998-4379"}
      ]
    });
  }

  useEffect(() => {
    setDrivers(JSON.parse(getAllDrivers()).drivers);
  }, []);

  return (
    <div>
      <h1>Drivers</h1>
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
        {drivers && drivers
          .filter((u) => u.lname.toLowerCase().includes(lastnameFilter.toLowerCase()))
          .map((u) => {
            return <ListGroup.Item>{u.fname+' '+u.lname+' ('+u.phone+')'}</ ListGroup.Item>;
          })
        }
      </ListGroup>
    </div>
  );
}

export default Drivers;
