import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'

function LeftMenu() {
  return (
    <Nav
      as="ul"
      activeKey="/home"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse left-menu"
    >
      <Nav.Item  as="li">
        <NavLink className="nav-link" to="/users"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        Users</NavLink>
      </Nav.Item>

      <Nav.Item as="li">
        <NavLink className="nav-link" to="/drivers">Drivers</NavLink>
      </Nav.Item>
    </Nav>
  );
}

function TopBar(props) {
  const signOut = () => {
    props.setLoggedIn(false);
  };

  return (
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow top-bar">
      <span class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" >React Test App</span>
      {props.loggedIn && <>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <span class="email">{props.email}</span>
          <a class="nav-link custom-link" href="#" onClick={signOut}>Sign out</a>
        </li>
      </ul></>}
    </nav>
  );
}

export {LeftMenu, TopBar};
