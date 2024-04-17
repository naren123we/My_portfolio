import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import the_khabri from "../../Assets/the_khabri.png";
import Portfolio from "../../Assets/Portfolio.png";
import my_cart from "../../Assets/my_kart.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Ransforming ideas into executable realities</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={my_cart}
              title="My_Kart"
              description="My_Kart is a website that resembles a basic prototype of an e-commerce website that allows users to explore various available 
              products and assemble them in their cart. The use of React JS allows the smooth rendering and functioning of the website and Tailwind CSS makes the design appealing and attractive .Backend tech stacks such as ExpressJS provides authentication, 
              and database MongoDB is used to store the data of the users and the products."
              ghLink="https://github.com/naren123we/My_kart-Ecommerce"
              demoLink="https://my-kart-ecommerce.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={the_khabri}
              title="the khabri"
              description="The web application software, the_khabri provides its readers the insights into the happenings around the 
              globe to be aware of. A phenomenal API provides the users with category-wise news that allows readers to read the news of
               their interest.The use of ReactJS enhances the scalability and flexibility of the website, and Tailwind CSS makes the website
                fully responsive and mobile-friendly. The reusable components reduce the loading time of the website and hence improves the efficiency 
                of the website."
              ghLink="https://github.com/naren123we/the_khabri"
              demoLink="https://drive.google.com/file/d/1BAJ68AWti-xc77KjAezrZLURBpUydJOu/view"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="A stylish and lively portfolio website powered by React.js's efficiency and React
               Bootstrap's versatility. It sets a new standard in showcasing projects, experience, skills and 
               achievements in the digital realm. This portfolio website not only delivers stunning visuals but 
               also ensures lightning-fast performance and a delightful user
               experience, making it a standout showcase of modern web development."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.info/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
