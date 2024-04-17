import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import myImg from "../../Assets/profileImg.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Button } from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Resume from "../../Assets/Resume.pdf";

import "../Home/home.css";
import "./about.css";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Container>
          <Row>
            <Col md={8} className="about-description">
              <h1 style={{ fontSize: "2.3em" }} data-aos="fade-right">
                <span className="primary-header"> Get to Know </span> Me
              </h1>
              <p className="about-body " data-aos="fade-up">
                <br />I am{" "}
                <span className="primary-header">Narendra Mohan Pathak</span>,
                and I will be completing my{" "}
                <span className="primary-header">B.Tech</span> degree in{" "}
                <span className="primary-header">
                  computer science and engineering
                </span>
                {"  "}
                from{" "}
                <span className="primary-header">
                  Harcourt Butler Technical University
                </span>
                .
                <br />
                <br />I am a passionate coder and love to solve{" "}
                <span className="primary-header">
                  complex and real-world problems
                </span>{" "}
                using my technical skills. I have upskilled myself with various
                technical skills such as{" "}
                <span className="primary-header">
                  data structures and algorithms
                </span>
                ,{" "}
                <span className="primary-header">
                  frontend technologies such as HTML, CSS, JavaScript, React-JS
                  and backend technologies such as Express JS, Node-JS, Mongo-DB
                </span>
                .
                <br />
                <br />I am a{" "}
                <span className="primary-header"> hardworking</span> person and
                a <span className="primary-header">quick learner</span> who
                always explore new opportunities to enhance my skills. I have
                worked on a few personal projects like{" "}
                <span className="primary-header">My_Kart, The_khabri</span> etc.
                and also a few professional projects during my
                <span className="primary-header"> internship</span> at{" "}
                <span className="primary-header">CrackDSA</span> and{" "}
                <span className="primary-header">Graviti</span>.
                <br />
                <br />
                Besides coding, my other interests include{" "}
                <span className="primary-header">
                  poetry writing and reading books
                </span>
                .
              </p>
              <Button
                variant="primary"
                style={{ margin: "10px 0px" }}
                href={Resume}
                target="_blank"
              >
                <FaCloudDownloadAlt /> &nbsp; My Resume
              </Button>
            </Col>
            <Col md={4} className="myAvtar">
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Col>
          </Row>
        </Container>

        <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span> I Work With
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
