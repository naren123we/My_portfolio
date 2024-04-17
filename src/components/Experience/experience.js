import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import crackdsa_logo from "../../Assets/crackdsa_logo.png";
import graviti from "../../Assets/graviti_logo.png";

import "./experience.css";
import ExperienceCards from "./experienceCard";

function Experience() {
  return (
    <Container fluid className="project-section" id="experience">
      <Container>
        <h1 className="project-heading">
          <strong className="Fluorescent-Blue"> Experience </strong>
        </h1>
        <p>Hands on experience with real-world challenges</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ExperienceCards
              imgPath={graviti}
              title="Graviti"
              description="During my internship at Graviti, I implemented a major feature, photo-viewer, where consignees can view the images of the goods transported.
              I also helped in improving the efficiency of the code by making the components reusable which in turn reduced the loading time of the website.
               I have upskilled myself in various tech stacks such as  ReactJS, NextJS, Ant Design and many more."
              ghLink="https://drive.google.com/file/d/1YWjArqhy7rUo-Liu3j_RMWv5Qv_TizMc/view"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ExperienceCards
              imgPath={crackdsa_logo}
              title="CrackDsa"
              description="I worked as a software developer intern (frontend) in CrackDSA. I was 
              indulged with the development of Job Search CrackDSA which helps job seekers to find new opportunities.
               I also developed few additional features to improve the user's interaction and experience such as category-wise filtration. 
               Through my first experience I gained various practical insights to manage the code effectively.
               It helped me to develop technical skills such as ReactJS, Tailwind CSS etc."
              ghLink="https://drive.google.com/file/d/1iw-YMhxDBd_k1_TYrGZ8LdC7jM219ysf/view"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Experience;
