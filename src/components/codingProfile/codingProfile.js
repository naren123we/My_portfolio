import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import gfg from "../../Assets/gfg.png";
import Leetcode from "../../Assets/leetcode.png";

import "./codingProfiles.css";
import Cards from "./Cards";

function CodingProfile() {
  return (
    <Container fluid className="project-section" id="codingProfile">
      <Container>
        <h1 className="project-heading">
          My <strong className="Fluorescent-Blue">Coding Profiles </strong>
        </h1>
        <p>
          Scripting success through consistent practice at these coding
          platforms.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <Cards
              imgPath={Leetcode}
              title="Leetcode"
              description="I have successfully solved over 600 problems on leetcode. This has improved my problem solving skills and leveled up my passion for coding. These problems helped me to develop clarity in various concepts in data structures, algorithms, databases, and other programming concepts."
              ghLink="https://leetcode.com/the_narendra/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <Cards
              imgPath={gfg}
              title="Geeks For Geeks"
              description="I have consistently solved over 600 problems on geeks for geeks, which include problems with different difficulty levels. With strong determination and regular practice, I have improved my coding abilities."
              ghLink="https://www.geeksforgeeks.org/user/narendramovbpy/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default CodingProfile;
