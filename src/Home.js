import React, { useState} from 'react';
import { Carousel, Modal, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { HomeCard } from './components/HomeCard';
import "./assets/css/fonts.css"
import "./assets/css/buttons.css"
import "./Home.css"
import "./Apply.css"
//import cards from "./assets/img/cards.png"
import card1 from "./assets/img/cards1.png"
import card2 from "./assets/img/cards2.png"
import card3 from "./assets/img/cards3.png"
import audition from "./assets/img/Auditions.png"
import fundamentals from "./assets/img/Fundamentals.png"
import choreo from "./assets/img/Choreography.png"
import community from "./assets/img/Community.png"
import showcase from "./assets/img/Showcase.png"
import beyond from "./assets/img/Beyond.png"
import winter from "./assets/img/winter.png"
import dad from "./assets/img/dad.png"
import footer from "./assets/img/footer.png"



export function Home() {
  const [show, setShow] = useState(true);

  //const handleClose = () => setShow(false);


  return (
    <div className = "container">
      <Modal.Dialog show={show}
    size = "lg"
    >
  <Modal.Header className = "header">
    COMING IN HOT!
  </Modal.Header>

  <Modal.Body>
  <div className = "mid-container">
  <img
    src = {winter}
    alt = "audition"
    className = "toast-image"
    />
  </div>
  <p className = "regtext">
    Looking for something to spice up your already winter-ful UCLA experience? Look no further -- it’s time to put your sparkle on with ✨Foundations Choreography✨! Don’t you give us the cold shoulder now 🥶. Rise to the B(a)rrrr, grab your friends and family, and join one of our Winter Virtual Training Teams! We promise that it’ll be a (th)aw-esome couple of weeks 😉.
    </p>
    <Link to={'/applygenmem'}>
  <Button bsPrefix= "btn-apply">Apply Now</Button>
</Link>
  </Modal.Body>
      </Modal.Dialog>
    
  <div className = "mid-container">
  <img
    src = {dad}
    alt ="dad"
    className = "train"
  />
  <div className = "header" >
    <text>GROW. TRAIN. CHALLENGE YOURSELF.</text>
  <p className = "regtext">Welcome to the largest student-run dance organization in Southern California. Based in UCLA, we strive to create a safe and welcoming environment for beginning and intermediate dancers to grow, train, and challenge themselves. <b>No experience necessary.</b></p>
  </div>
  </div>

  <div className="row">
    <div className = "block2">
      <HomeCard image = {card1} title = "JOIN OUR TRAINING TEAMS">
      A virtual space designed to help beginning and intermediate dancers learn choreography and dance education while creating community in an online format.
      </HomeCard>
    </div>
    <div className = "block2">
      <HomeCard image = {card2} title = "ATTEND OUR WORKSHOPS">
      Our bi-weekly workshops are beginner-friendly and open to all! We aim to expose dancers to varying styles of dance and fundamentals.
      </HomeCard>
    </div>
    <div className = "block2">
      <HomeCard image = {card3} title = "TEACH THE COMMUNITY">
      Passionate about dance? Want to challenge your set building skills and help foster a community? Sign up to teach a workshop or apply to co-direct a team! 
      </HomeCard>
    </div>
  
  </div>

  <div>
  <Carousel className = "carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {audition}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {fundamentals}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {choreo}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {community}
      alt="Fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {showcase}
      alt="Fifth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {beyond}
      alt="Sixth slide"
    />
  </Carousel.Item>
</Carousel>
  </div>
  
<footer>
<img
  src = {footer}
  alt = "links"
  className = "footer"/>
</footer>


  </div>
  
  )
}

  