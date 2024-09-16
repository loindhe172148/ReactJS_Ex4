import React from "react";
import styled from "styled-components";
import {  Row, Col } from "react-bootstrap"; // Bootstrap components

const CoreSerivcesComponent = () => (
  <CoreServicesContainer className="container text-center my-5">
    <MainServicesTitle id="mainservices">Main Services</MainServicesTitle>
    <LearnSubtitle id="learn">
      Learn services to focus<br />
      on your beauty
    </LearnSubtitle>
    <PortaDescription id="porta">
      Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non
      parturient  <br/> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
    </PortaDescription>

    <ServicesRow> {/* Center the row */}
  <Col xs={12} sm={6} md={3} className="mb-3 d-flex justify-content-center"> {/* Center each card */}
    <ServiceCard>
      <img src="Home1/Animation1 (1).png" alt="Beauty consultation" />
      <h2>Beauty consultation</h2>
      <p>
        Non parturient amet, feugiat <br/>tellus sagittis, scelerisque eget<br/> nulla turpis.
      </p>
    </ServiceCard>
  </Col>

  <Col xs={12} sm={6} md={3} className="mb-3 d-flex justify-content-center">
    <ServiceCard>
      <img src="Home1/Animation2.png" alt="Skin treatments" />
      <h2>Skin treatments</h2>
      <p>
        Non parturient amet, feugiat <br/>tellus sagittis, scelerisque eget <br/>nulla turpis.
      </p>
    </ServiceCard>
  </Col>

  <Col xs={12} sm={6} md={3} className="mb-3 d-flex justify-content-center">
    <ServiceCard>
      <img src="Home1/Animation3.png" alt="Beauty product" />
      <h2>Beauty product</h2>
      <p>
        Non parturient amet, feugiat <br/>tellus sagittis, scelerisque eget<br/> nulla turpis.
      </p>
    </ServiceCard>
  </Col>
</ServicesRow>

  </CoreServicesContainer>
);


// Styled components
const CoreServicesContainer = styled.div`
  text-align: center;
  margin-top: 60px; /* Adjusted for better spacing */
  background-size: contain;
  padding: 0 15px; /* Added padding for smaller screens */


  @media (min-width: 768px) {
    margin-top: 129px;
    padding: 0;
  }
`;

const MainServicesTitle = styled.h1`
  color: #FF64AE;
  font-size: 16px; /* Adjusted font size for responsiveness */
  margin-left: 4px;
  font-weight: 600;
  line-height: 20px;
  @media (min-width: 1440px) {
    margin-top: 125px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const LearnSubtitle = styled.h2`
  color: #091156;
  font-size: 36px; /* Adjusted font size for responsiveness */
  line-height: 45px;
  margin-top: 13px;
  margin-left: 2px;
  margin-bottom: 0px;
  margin-left: 4px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const PortaDescription = styled.p`
  color: #8B8B8B;
  font-size: 16px; /* Adjusted font size for responsiveness */
  line-height: 24px;
  letter-spacing: 1.6px;
  margin-top: 21px;
  margin-left: 2px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
const ServicesRow = styled(Row)`
  display: flex;
  justify-content: center;
  gap: 20px; /* Adjust gap between cards */
  flex-wrap: wrap; /* Ensure responsiveness for smaller screens */
  @media (min-width: 768px) {
    gap: 63px; /* Larger gap for larger screens */
  }
`;
const ServiceCard = styled.div`
  text-align: center;
  background-color: #fff;
  border-radius: 42px; /* Adjusted border radius for better aesthetics */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Adjusted shadow for better aesthetics */
  transition: box-shadow 0.3s ease;
  width: 100%;
  padding:30px 5px;
  padding-bottom: 51px;

  @media (min-width: 1440px) {
    margin-top: 69px;
  }
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }

  img {
     /* Adjusted padding for better responsiveness */
    max-width: 100%;
  }

  h2 {
    font-size: 18px; /* Adjusted font size for responsiveness */
    font-weight: 600;
    line-height: 22.5px;
    color: #091156;
    padding-top: 20px; /* Adjusted padding for better responsiveness */
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height:21px;
    letter-spacing: 1.4px;
    color: #8b8b8b;
    padding-top: 10px; /* Adjusted padding for better responsiveness */
  }

  @media (min-width: 769px) {
    box-shadow: 0px 0px 50px 25px #f6f7ff; /* Restored original shadow on larger screens */
    
    img {
      padding-top: 27px;
    }

    h2 {
      font-size: 18px;
      padding-top: 58px;
    }

    p {
      font-size: 14px;
      padding-top: 12px;
    }
  }
  @media (max-width: 768px) {
    box-shadow: 0px 0px 50px 25px #f6f7ff; /* Restored original shadow on larger screens */
    padding-bottom: 0px;
    br{
      display: 0px;
    }
    img {
      padding-top: 0px;
    }

    h2 {
      font-size: 18px;
      padding-top: 0px;
    }

    p {
      font-size: 14px;
      padding-top: 0px;
    }
  }
`;

export default CoreSerivcesComponent;
