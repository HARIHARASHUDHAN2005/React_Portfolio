import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCogs, faTools } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: faCode,
      skills: ["C", "C++", "Python", "HTML", "CSS", "Javascript (basic)", "Java", "MySQL"]
    },
    {
      title: "Technologies/Frameworks",
      icon: faCogs,
      skills: [ "Numpy", "Backend Development", "MongoDB", "PowerBI", "Tableau", "Pandas"]
    },
    {
      title: "Tools",
      icon: faTools,
      skills: ["VScode", "Git", "Github", "Canva",  "Codeblocks"]
    },
    {
      title: "Core Concepts",
      icon: faDatabase,
      skills: ["HTML", "CSS", "JavaScript", "Databases (SQL, NoSQL)", "Development Tools"]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Skills & Expertise</h2>
        <Row>
          {skillCategories.map((category, index) => (
            <Col md={6} lg={3} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="text-center mb-3">
                    <FontAwesomeIcon icon={category.icon} size="2x" className="text-primary" />
                  </div>
                  <Card.Title className="text-center mb-4">{category.title}</Card.Title>
                  <ul className="list-unstyled">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mb-2">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
