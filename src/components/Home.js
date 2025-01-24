import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      className="home-section min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298, #ff7eb3)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        className="section-overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></div>
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title mb-3">
                Hi, I'm{" "}
                <span
                  className="highlight"
                  style={{
                    background: "linear-gradient(90deg, #ff9a9e, #fad0c4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hariharashudhan G
                </span>
              </h1>
              <h2
                className="hero-subtitle mb-4"
                style={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Aspiring Web Developer
              </h2>
              <p
                className="hero-text mb-4"
                style={{ fontSize: "1.1rem", color: "#f0f0f0" }}
              >
                Passionate about Web Development and designing user-friendly,
                responsive websites. Currently pursuing B.Tech in Artificial
                Intelligence and Data Science at Sri Eshwar College of
                Engineering.
              </p>
              <div className="contact-info mb-4">
                <motion.p
                  className="mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ fontSize: "1.1rem", color: "#eaeaea" }}
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  <a
                    href="tel:+918807639930"
                    className="contact-link"
                    style={{ color: "#ffd700", textDecoration: "none" }}
                  >
                    +91 9629415297
                  </a>
                </motion.p>
                <motion.p
                  className="mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ fontSize: "1.1rem", color: "#eaeaea" }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  <a
                    href="mailto:harish.r2023ai-ds@sece.ac.in"
                    className="contact-link"
                    style={{ color: "#ffd700", textDecoration: "none" }}
                  >
                    hariharashudhan.g2023ai-ds@sece.ac.in
                  </a>
                </motion.p>
              </div>
              <div className="social-links mb-4">
                <motion.a
                  href="https://github.com/HARIHARASHUDHAN2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button me-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: "#ffd700",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} className="me-2" />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    color: "#ffd700",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                  LinkedIn
                </motion.a>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="custom-button"
                  href="/about"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff9a9e, #fad0c4, #fbc2eb)",
                    color: "#1e1e1e",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "30px",
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-container"
            >
              {/* Add your image or illustration here */}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
