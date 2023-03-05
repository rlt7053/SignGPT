import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowUp,
  faArrowUpRightFromSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faMoon } from "@fortawesome/free-regular-svg-icons";

import SignGPTIcon from "../assets/signgpt.svg";

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex end">
<<<<<<< HEAD
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
=======
      <div class="fixed-sidebar">
        <button class="button newBtn">
          <FontAwesomeIcon icon={faPlus} />
          New Chat
        </button>

        <ul>
          <li>
            <img id="signgpt-side-icon" src={SignGPTIcon} alt="SignGPT icon" />
            SignGPT
          </li>
          <hr />
          <li class="icon-sidebar">
            <FontAwesomeIcon icon={faUser} />
            Upgrade to PLUS
          </li>
          <br />
          <li class="icon-sidebar">
            <FontAwesomeIcon icon={faMoon} />
            Dark Mode
          </li>
          <br />
          <li class="icon-sidebar">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Updates & FAQ
          </li>
          <br />
          <li class="icon-sidebar">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            Log Out
          </li>
          <br />
        </ul>
      </div>
>>>>>>> b3b625fb8f7afb5f02d6cadcce3e6adb9b51a8af
    </Nav>
  );
}

export default Sidebar;
