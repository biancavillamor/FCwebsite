import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../assets/css/fonts.css"
import "../assets/css/buttons.css"

export const ApplyCard = (props) => (
<Card
style={{ width: '16em', height: "14em", font: "Bebas Neue" , alignContent: "center"}}
className="text-center">
  <Card.Body>
    <div className = "cardTitle">
    <text>{props.children}</text>
    </div>
    
    <div className = "cardBody">
      <p><b>Opens:</b> {props.open}</p>
      <p><b>Closes:</b> {props.close}</p>
    </div>
    <Link to={'/apply' + props.url}>
  <Button bsPrefix={props.button}>{props.apply}</Button>
</Link>
  </Card.Body>
</Card>
)