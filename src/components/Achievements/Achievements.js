import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import codevita from "../../Assets/codevita.png";
import leetcodImg from "../../Assets/leetcode.png";
import kavya_sandhya from "../../Assets/kavya_sandhya.jpeg";

import "./Achievements.css";

function Achievements() {
  return (
    <Container fluid className="achievements-section" id="achievements">
      <h1 style={{ padding: "10px 0px", fontSize: "2.3em" }}>
        <span className="Fluorescent-Blue">Achieve</span>
        <span className="">ments</span>
      </h1>
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="achievements-heading">
              Global rank 1098
              <span className="Fluorescent-Blue"> @TCS Codevita season 11</span>
            </h1>
            <blockquote style={{ fontSize: "1.2em" }}>
              <p style={{ textAlign: "justify" }}>
                Securing a global rank of{" "}
                <span className="Fluorescent-Blue">1098</span> in TCS CodeVita
                Season 11 was a remarkable achievement for me, reflecting my
                dedication and{" "}
                <span className="Fluorescent-Blue">
                  problem-solving skills in competitive coding
                </span>
                . The journey to this milestone was filled with good practice,
                and a relentless pursuit of excellence. Participating in the
                competition allowed me to showcase my technical skills in
                solving complex algorithmic challenges. Through rigorous
                preparation and a growth-oriented mindset, I was able to
                navigate through intense coding rounds and demonstrate my
                ability to perform under pressure. This achievement not only
                boosted my confidence but also reaffirmed my passion for coding
                and problem-solving, motivating me to continually push the
                boundaries of my capabilities in the realm of
                competitive programming.
              </p>
            </blockquote>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={codevita} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={leetcodImg} alt="about" className="img-fluid" />
          </Col>

          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="achievements-heading">
              210+ days streak{" "}
              <span className="Fluorescent-Blue">@leetcode</span>
            </h1>
            <blockquote style={{ fontSize: "1.2em" }}>
              <p style={{ textAlign: "justify" }}>
                I have immersed myself in a relentless pursuit of
                problem-solving excellence, since august 2023 tackling over
                <span className="Fluorescent-Blue">
                  {" "}
                  600 coding challenges
                </span>{" "}
                on platforms like LeetCode. This dedicated effort has been
                underscored by maintaining an impressive daily challenge
                completion streak spanning more than{" "}
                <span className="Fluorescent-Blue">200 consecutive days</span>.
                This consistent engagement has not only sharpened my algorithmic
                skills but also deepened my understanding of various programming
                paradigms. Along this journey, I have earned{" "}
                <span className="Fluorescent-Blue">9 badges</span> on LeetCode
                as a testament to my consistency and proficiency in solving
                diverse problem sets. These achievements highlight my commitment
                to continuous improvement and readiness to take on complex
                coding challenges with precision and creativity. I am eager to
                leverage this experience and expertise to contribute
                meaningfully to future endeavors in the realm of software
                development and problem-solving.
              </p>
            </blockquote>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="achievements-heading">
              Journey at{" "}
              <span className="Fluorescent-Blue"> Kavya Sandhya</span>
            </h1>
            <blockquote style={{ fontSize: "1.2em" }}>
              <p style={{ textAlign: "justify" }}>
                Participating in the prestigious event{" "}
                <span className="Fluorescent-Blue"> "Kavya Sandhya"</span> was
                an unforgettable experience, where I had the honor of{" "}
                <span className="Fluorescent-Blue">
                  sharing the stage with world-renowned poets
                </span>{" "}
                and reciting my self-composed poetry alongside them. Among the
                selected few from my university,{" "}
                <span className="Fluorescent-Blue">
                  I stood out as the sole performer from the second-year cohort
                </span>
                , adding a sense of pride and responsibility to the occasion. It
                was a surreal moment to showcase my poetic prowess in front of
                such esteemed personalities and an enthusiastic audience. The
                event provided a platform to express my thoughts, emotions, and
                creativity through poetry. Moreover, my passion for poetry was
                further validated when I clinched the first position in the
                university's poetry competition on independence day, solidifying
                my commitment to the art form and inspiring me to continue
                exploring its depths with authenticity.
              </p>
            </blockquote>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={kavya_sandhya} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
