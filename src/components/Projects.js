import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: "Java Project",
      description: "Task and Reminder Management",
      tech: "Java, MySQL",
      duration: "1 week",
      role: "Database management using Java and MySQL",
    },
    {
      title: "Data Science Project",
      description: "Students' Performance Prediction",
      tech: "Tableau, PowerBI, Excel",
      role: "Solo Project",
    },
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f7b733, #fc4a1a)",
        color: "#fff",
      }}
    >
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "700",
            fontSize: "2.5rem",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          Projects
        </h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f1f1f1)",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0px 10px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#fc4a1a",
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    {project.duration}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "1rem", color: "#333" }}>
                    {project.description}
                    <br />
                    <strong>Role:</strong> {project.role}
                    <br />
                    <strong>Technologies:</strong> {project.tech}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
