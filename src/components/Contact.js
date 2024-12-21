import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/msg.png";
import emailjs from '@emailjs/browser';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (formDetails.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    if (formDetails.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    if (!formDetails.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formDetails.phone.match(/^\+?[\d\s-]{10,}$/)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formDetails.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
    // Clear error when user starts typing
    if (errors[category]) {
      setErrors({
        ...errors,
        [category]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setButtonText("Sending...");
    setStatus({});

    try {
      const templateParams = {
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        reply_to: formDetails.email,
        phone_number: formDetails.phone,
        message: formDetails.message,
      };

      await emailjs.send(
        'service_mqaa6ku',
        'template_ho2ee69',
        templateParams,
        'vbVuDaeOzYpvzo5RH'
      );

      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully!' });
      setButtonText("Message Sent!");
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly.' 
      });
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <style>
        {`
          .error-message {
            color: #ff4d4d;
            font-size: 0.8rem;
            margin-top: 4px;
            text-align: left;
          }
          .success-message {
            color: #4BB543;
            font-size: 1rem;
            padding: 10px;
            text-align: center;
            background: rgba(75, 181, 67, 0.1);
            border-radius: 4px;
            margin: 10px 0;
          }
          .error-alert {
            color: #ff4d4d;
            font-size: 1rem;
            padding: 10px;
            text-align: center;
            background: rgba(255, 77, 77, 0.1);
            border-radius: 4px;
            margin: 10px 0;
          }
          .btn-success {
            background-color: #4BB543 !important;
            border: none;
            pointer-events: none;
          }
        `}
      </style>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.firstName} 
                          placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          required 
                        />
                        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          value={formDetails.lastName} 
                          placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          required
                        />
                        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          value={formDetails.email} 
                          placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          required 
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="tel" 
                          value={formDetails.phone} 
                          placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          required
                        />
                        {errors.phone && <div className="error-message">{errors.phone}</div>}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          value={formDetails.message} 
                          placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        {errors.message && <div className="error-message">{errors.message}</div>}
                        {!status.success && (
                          <button type="submit"><span>{buttonText}</span></button>
                        )}
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success-message" : "error-alert"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;