import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeimg from "../../Assets/Avtar.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Type from "./Type";
import "./home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Namaste {`( );`}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                I'm
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">Narendra Mohan Pathak</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeimg}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <ScrollToTop />
    </section>
  );
}

export default Home;
