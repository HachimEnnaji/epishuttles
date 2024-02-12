import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import fire from "./fire.gif";
import shuttle from "./shuttle.png";

function Menu() {
  return (
    <Container className="d-flex h-100 my-auto flex-column align-items-center justify-content-center fs-1 display-1 fst-italic  ">
      <Link to={"/game"}>
        <Row className="selection">
          <Col className="text-white">Play</Col>
        </Row>
      </Link>
      <div className="flex Div-logo position-relative position-absolute">
        <div className="div-shuttle">
          <img src={shuttle} className="App-logos" alt="logo" />
        </div>
        <img src={fire} className="App-logos rotate" alt="logo" />
      </div>
      <Link to={"/"}>
        <Row className="selection">
          <Col className="text-white">Options</Col>
        </Row>
      </Link>
      <Link to={"/"}>
        <Row className="selection">
          <Col className="text-white">Settings</Col>
        </Row>
      </Link>
    </Container>
  );
}

export default Menu;
