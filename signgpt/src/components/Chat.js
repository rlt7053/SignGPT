import { Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBoltLightning, faTriangleExclamation, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Chat() {
  const examples = [
    "What is the sign for fish?",
    "What are some resources for learning sign language?",
    "How does language deprivation impact deaf children?"
  ];
  const capabilities = [
    "Can provide feedback on your signing",
    "Provides resource links to sign lanugage videos",
  ];
  const limitations = [
    "May occasionally generate signs that are incorrect in form or context",
    "May lack domain-specific knowledge for signs in fields such as healthcare, science, and technology",
    "Only supports ASL"
  ];

  return (
    <div className="Chat">
      <header>SignGPT</header>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faSun} />
          <Row>Examples</Row>
          {examples.map((example) => (
            <Row>{example}</Row>
          ))}
        </Col>
        <Col>
          <FontAwesomeIcon icon={faBoltLightning} />
          <Row>Capabilities</Row>
          {capabilities.map((capabiliity) => (
            <Row>{capabiliity}</Row>
          ))}
        </Col>
        <Col>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <Row>Limitations</Row>
          {limitations.map((limitation) => (
            <Row>{limitation}</Row>
          ))}
        </Col>
      </Row>
      <Row>
        <Row>
          <Form.Check
            reverse
            type="switch"
            id="custom-switch"
            label="Practice"
          />
        </Row>
        <Row id="message">
          <Form.Control as="textarea" rows={1} />
          <FontAwesomeIcon id="paperPlane" icon={faPaperPlane} />
        </Row>
      </Row>
    </div>
  );
}

export default Chat;
