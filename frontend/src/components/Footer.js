// FOOTER

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SiAbstract } from "react-icons/si";    /*React icons */


function Footer() {
  return (
    <footer className="footer text-light py-4">
      <Container>
        <Row>
          <Col md={2} sm={4} xs={6} className="mb-3">
            <h6>Abstract</h6>
            <ul className="list-unstyled">
              <li>Branches</li>
            </ul>
          </Col>
          <Col md={2} sm={4} xs={6} className="mb-3">
            <h6>Resources</h6>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </Col>
          <Col md={2} sm={4} xs={6} className="mb-3">
            <h6>Community</h6>
            <ul className="list-unstyled">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </Col>
          <Col md={2} sm={4} xs={6} className="mb-3">
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
        <br></br>
            <h6>Contact Us</h6>
            <ul className="list-unstyled">
              <li>info@abstract.com</li>
            </ul>
          </Col>
          <Col md={2} sm={4} xs={6} className=" mb-3">
          <div className='copyright'>
          <div>
          <SiAbstract className='icon'/>
          </div>
          <br></br>
          <p className="mb-0">© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
          </div>
          </Col>
        </Row>
       
      </Container>
    </footer>
  );
}

export default Footer;

