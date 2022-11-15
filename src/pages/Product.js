import React from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import CardProduct from "../components/CardProduct";

function Product() {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col className="text-center my-5">
            <h2>Our Products</h2>
            <p style={{ color: "#e39210", fontStyle: "italic" }}>
              Find the products that you like here at an affordable price.
            </p>
          </Col>
        </Row>
        <Row xs={1} md={4} className="g-4">
          {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
          <CardProduct
            image="p01.png"
            title="Kursi Kuning Merona"
            desc="Lorem ipsum dolor sit amet, consectetur."
            price="2000"
            disc="10"
          />
          <CardProduct
            image="p02.png"
            title="Sofa Navy"
            desc="In quis lectus ultricies, semper nunc sit amet, laoreet risus."
            price="3999000"
            disc="15"
          />
          <CardProduct
            image="p03.png"
            title="Sofa Keluarga Besar"
            desc="Pellentesque lectus justo, rhoncus in nulla vel."
            price="5890000"
          />
          <CardProduct
            image="p04.png"
            title="Kursi Single"
            desc="Duis vitae augue magna. Maecenas auctor ligula a justo."
            price="950000"
            disc="30"
          />
          <CardProduct
            image="p08.png"
            title="Lampu Putih Bersih"
            desc="Lorem ipsum dolor sit amet, consectetur."
            price="300000"
            disc="50"
          />
          <CardProduct
            image="p06.png"
            title="Sofa Panjang Hijau"
            desc="Lorem ipsum dolor sit amet, consectetur."
            price="4000000"
          />
          <CardProduct
            image="p07.png"
            title="Meja Panjang"
            desc="Lorem ipsum dolor sit amet, consectetur."
            price="1900000"
            disc="75"
          />
          <CardProduct
            image="p09.png"
            title="Meja TV Putih"
            desc="Lorem ipsum dolor sit amet, consectetur."
            price="1900000"
          />

          {/* ))} */}
        </Row>
      </Container>
    </>
  );
}

export default Product;
