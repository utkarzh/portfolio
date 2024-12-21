import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import home from '../assets/img/home-image.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('Ja');
  const [typingSpeed, setTypingSpeed] = useState(200); // Faster typing speed
  const roles = ["JavaScript Developer"];
  const typingPause = 200; // Shorter pause before deleting

  useEffect(() => {
    const handleTyping = setTimeout(() => {
      updateText();
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [text, isDeleting]);

  const updateText = () => {
    const currentRole = roles[loopNum % roles.length];
    if (isDeleting) {
      setText((prev) => prev.slice(0, -1));
      if (text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(100);
      }
    } else {
      setText((prev) => currentRole.slice(0, prev.length + 1));
      if (text === currentRole) {
        setIsDeleting(true);
        setTypingSpeed(typingPause);
      }
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Hello, I'm Utkarsh!</span>
                  <h1>
                    <span style={{color: 'white'}}>I am a </span>
                    <span style={{color: 'purple'}}>Javascript Developer</span>
                  </h1>
                  <p>
                    As a Software Engineer with a year of experience in React, I specialize in both frontend and backend technologies. My experience spans multiple projects, including leading the frontend development of one.
                  </p>
                  <a style={{color:"white",fontSize:24,textDecoration:"none"}}href="https://www.snapit.tech/r/oTe71CxS" target="_blank">
                    View My Resume <ArrowRightCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={home} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
