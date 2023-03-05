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
    </Nav>
  );
}

export default Sidebar;
