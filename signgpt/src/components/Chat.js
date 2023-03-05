import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBoltLightning, faTriangleExclamation, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Message from './Message';

function Chat() {

  const [messages, setMessages] = useState([]);

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

  function send(e) {
    e.preventDefault();
    const text = document.getElementById("textbox").value;
    if (text !== "") {
      setMessages([
        ...messages,
        { message: text}
      ])
    }
    document.getElementById("textbox").value = "";
  }

  return (
    <div className="Chat">
      {(messages.length === 0) ? 
      <>
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
        </>
        : <></>}
      {messages.map((message) => (
        <Message  messages={ true} >{message}</Message>
      ))}
      <Row id="chatbar">
        <Row>
          <Form.Check
            reverse
            type="switch"
            id="custom-switch"
            label="Practice"
          />
        </Row>
        <Row>
          <div id="message">
            <Form.Control as="textarea" id="textbox" rows={1} />
            <FontAwesomeIcon id="paperPlane" icon={faPaperPlane}  onClick={send}/>
          </div>
          <Form.Text>SignGPT March 5 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</Form.Text>
        </Row>
      </Row>
    </div>
  );
}

export default Chat;
