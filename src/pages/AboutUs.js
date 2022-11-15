import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";

function AboutUs() {
  return (
    <div className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <Row>
        <Col className="text-center">
          <h2>About Us</h2>
          <p style={{ color: "#e39210", fontStyle: "italic" }}>
            Introduce our company.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <div style={{ position: "relative", top: 0, left: 0 }}>
            <img
              src={require("../assets/pic03.jpg")}
              style={{
                borderRadius: "20px",
                filter: "blur(1px)",
                maxWidth: "80%",

                position: "relative",
                top: 0,
                left: 0,
                marginLeft: "-5%",
              }}
              alt="about us"
            />
            <img
              src={require("../assets/pic01.jpg")}
              style={{
                borderRadius: "20px",

                position: "absolute",
                top: "5%",
                left: "30%",
                maxHeight: "90%",
                maxWidth: "80%",
                boxShadow: "5px 10px 18px #888888",
              }}
              alt="about us"
            />
          </div>
        </Col>
        <Col
          md={8}
          style={{
            paddingTop: "5%",
            paddingRight: "10%",
            paddingLeft: "10%",
            textAlign: "center",
          }}
        >
          <Container>
            <img
              src={logo}
              width="70"
              height="70"
              alt="Our logo"
              style={{ marginRight: "15px" }}
            />
            <span
              style={{
                fontWeight: "700",
                fontStyle: "italic",
                fontSize: "400%",
              }}
            >
              wins.
            </span>

            <p style={{ color: "#e39210" }}>
              <i>
                <b>- Decorate your Life with Arts. -</b>
              </i>
            </p>
            <p className="mt-5" style={{ textAlign: "justify" }}>
              <b>wins.furniture</b> is an integrated luxury furniture retail
              network company. Our company’s headquarter is located at the city
              of Jakarta, Indonesia. wins.furniture's goal is to become the most
              prestigious and comprehensive international luxury furniture firm
              in Indonesia. Our core values are flawless product quality,
              exceptional customer satisfaction, excellent high-end furniture
              product knowledge, and inspiring trust by delivering our promises
              to our customers. The company’s product portfolio includes chair
              and small armchairs, sofa, tables, cabinet and modular systems,
              beds and accessories. Rapid expansion, innovation, high quality
              services and a focus on fast-growing emerging markets are the key
              pillars that define Prodotti’s strategy today and will do so for
              years to come.
            </p>
          </Container>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </div>
  );
}

export default AboutUs;
