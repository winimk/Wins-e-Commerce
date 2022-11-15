import React from "react";
import { Carousel } from "react-bootstrap";
import slide3 from "../assets/slider3.jpg";
import slide2 from "../assets/slider2.jpg";
import slide1 from "../assets/slider1.jpg";

import Product from "./Product";
import Contact from "./Contact";
import AboutUs from "./AboutUs";

const titleCarausel = {
  fontWeight: "900",
  fontSize: "500%",
  textShadow: "1px 1px 2px grey, 0 0 25px grey, 0 0 5px grey",
};

function Home() {
  return (
    <>
      <Carousel style={{ marginTop: "-20vh" }} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption style={{ bottom: "40%", textAlign: "right" }}>
            <h1 style={titleCarausel}>Modern.</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption style={{ bottom: "40%" }}>
            <h1 style={titleCarausel}>Affordable.</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption style={{ bottom: "40%", textAlign: "left" }}>
            <h1 style={titleCarausel}>Elegant.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Product />
      <AboutUs />
      <Contact />
    </>
  );
}

export default Home;
