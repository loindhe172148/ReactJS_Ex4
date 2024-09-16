import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const AboutUsComponent = () => (
  <AboutUsContainer>
    <Row>
      <Col lg={6} md={12}>
        <AboutTitle id="aboutus">About Us</AboutTitle>
        <AboutSubtitle id="aboutus1">
          We are the best beauty clinic
        </AboutSubtitle>
        <AboutParagraph id="aboutus2">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit. Elit, quam suscipit purus donec
          <br /> amet. Egestas volutpat facilisi eu libero. Nunc, <br />
          ipsum ornare mauris sit quam quis enim. Varius
          <br /> tellus in suspendisse placerat.
        </AboutParagraph>
        <AboutParagraph2 id="aboutus3" marginTop="21px">
          Id dui erat sed quam tellus in purus. Pellentesque<br />congue fringilla
          cras tellus enim.
        </AboutParagraph2>
        <ButtonContainer>
          <LearnMoreButton id="learnmore" href="#">
            Learn More
          </LearnMoreButton>
          <PlayWatchContainer>
            <PlayButton
              id="playbutton"
              src="Home1/Play_button.png"
              alt=""
            />
            <WatchVideoLink id="watchvideo" href="#">
              Watch Video
            </WatchVideoLink>
          </PlayWatchContainer>
        </ButtonContainer>
      </Col>
      <Col lg={6} md={12} >
        <Image
          id="anhnha"
          src="Home1/unsplash_LRXYS0tSyGc.png"
          alt=""
        />
      </Col>
    </Row>
  </AboutUsContainer>
);

// Styled components
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 20px; /* Apply gap between flex items */
  @media (min-width: 1440px) {
    padding-top: 0px;
        margin-left: 35px;
        gap: 0px;
  }
  @media (max-width: 1439px) {
    padding:20px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    text-align: center;
    gap: 53px;
  }
`;

const AboutTitle = styled.h1`
  color: #ff64ae;
  margin-top: 74px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 0px;
  }
  @media (max-width: 320px) {
    margin-top: 0px;
  }
`;

const AboutSubtitle = styled.h1`
  margin-top: 13px;
  font-size: 36px;
  color: #091156;
  line-height: 45px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const AboutParagraph = styled.p`
  font-size: 16px;
  color: #8b8b8b;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: 400;
  margin-top: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    br {
      display: none;
    }
  }
`;
const AboutParagraph2 = styled.p`
  font-size: 16px;
  color: #8b8b8b;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: 400;
  padding-top: 9px;
  margin-bottom: 47px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    br {
      display: none;
    }
  }
`;

const LearnMoreButton = styled.a`
  padding: 18px 44px;
  margin-top: 3px;
  font-size: 16px;
  text-decoration: none;
  color: white;
  background-color: rgb(255, 100, 174);
  border-radius: 50px;
  letter-spacing: 1.6px;
  line-height: 24px;
  align-items: center;
font-weight: 600;
margin-left:4px;
  @media (max-width: 768px) {
    padding: 10px 40px;
    font-size: 15px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align items to the left */
  gap: 20px; /* Adjust the spacing between the buttons */
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content:center; /* Stack vertically on smaller screens */
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 320px) {
    flex-direction: column; /* Stack vertically on smaller screens */
    align-items: center;
    gap: 10px;
  }
`;
const PlayButton = styled.img`
    margin-top: 4px;
    max-width: 100%;
    margin-left: 25px;
    margin-right: 46px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;
const PlayWatchContainer = styled.div`
  display: flex;
  align-items: center; /* Align PlayButton and WatchVideoLink on the same row */
   /* Space between PlayButton and WatchVideoLink */
`;
const WatchVideoLink = styled.a`
  text-decoration: none;
  color: rgb(139, 139, 139);
  font-size: 17px;
  letter-spacing: 1.1px;
  margin-right: 108px;
  margin-top: 1px;
  margin-left: -31px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-right: 20px;
  }
`;

const Image = styled.img`
  padding-top: 50px;
  width: 100%;
  @media (min-width: 1440px) {
    padding-top: 0px;
    padding-top: 42px;
    width: 109%;
    margin-left: -11px;
    
  }
  @media (max-width: 320px) {
    padding: 0px;
    margin: 0px;

    width: 109%;
    
    
  }
`;

export default AboutUsComponent;
