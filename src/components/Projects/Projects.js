import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://about.netflix.com/images/logo.png"}
              isBlog={false}
              title="NetflixGPT"
              description="Netflix GPT is a clone of Netflix that incorporates open AI to improve search engine results based on the user's requirements or searches. We integrated Search with GPT using OpenAI APIs, movie suggestions using TMDB APIs, and implemented secure authentication with Firebase."
              ghLink="https://github.com/vishalkumar-engr/Netflix-gpt"
              demoLink="https://netflixgpt9632.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
