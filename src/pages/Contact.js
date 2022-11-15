import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <div className="pt-5" style={{ paddingBottom: "10%" }}>
      <Row>
        <Col className="text-center">
          <h2>Contact</h2>
          <p style={{ color: "#e39210", fontStyle: "italic" }}>
            You can contact us for more information.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Card className="text-center">
              {/* <Card.Header>Featured</Card.Header> */}
              <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>Nama : Wini Muthia Kansha</Card.Text>
                <Card.Text>NIM : 2110045</Card.Text>
                <Card.Text>Email : winimuthia7@gmail.com</Card.Text>

                <Button
                  variant="success"
                  href="https://github.com/winimk?tab=repositories"
                >
                  My Github Repo{" "}
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                <i>this project is only for college assignment</i>
              </Card.Footer>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
