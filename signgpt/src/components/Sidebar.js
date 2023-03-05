import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';






function Sidebar() {
  return (


    <Nav defaultActiveKey="/home" className="flex end">
      <div class = "fixed-sidebar">



      <button class="button newBtn">
      <FontAwesomeIcon icon={(faCoffee)} />
        New Chat</button>
      <ul>
        <li><Nav.Link href="/home">SignGPT</Nav.Link></li>
        <li><Nav.Link eventKey="link-1">Upgrade to PLUS</Nav.Link></li>
        <li> <Nav.Link eventKey="link-2">Dark Mode</Nav.Link></li>
        <li><Nav.Link eventKey="link-3">Updates & FAQ</Nav.Link></li>
        <li><Nav.Link eventKey="link-4">Log Out</Nav.Link></li>

      </ul>

    </div>

    </Nav>

  );
}

export default Sidebar;

