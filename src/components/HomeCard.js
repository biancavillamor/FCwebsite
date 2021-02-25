import React from 'react';
import { Card } from 'react-bootstrap';
import "../assets/css/fonts.css"
import "../assets/css/buttons.css"

export const HomeCard = (props) => (
<Card
style={{ width: '15em', height: "20em", font: "Bebas Neue" , alignContent: "center"}}
className="text-center">
  <Card.Img variant="top" src={props.image} />
  <Card.ImgOverlay>
    <div className = "cardTitle">
    <text>{props.title}</text>
    </div>
  </Card.ImgOverlay>
  <Card.Body>
  <div className = "smalltext">
      <p>{props.children}</p>
    </div>
  </Card.Body>

  
</Card>
)