import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex end">
      <div className = "fixed-sidebar">
      <button className="button newBtn">
      <FontAwesomeIcon icon={(faPlus)} />
        New Chat</button>
      <ul>

      <i className="fa-solid fa-plus"></i>
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

