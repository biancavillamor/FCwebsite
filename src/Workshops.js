import React from 'react'
import "./Workshops.css";
import workshop from "./assets/img/workshop.png"
import instructor from "./assets/img/instructor.png"


export const Workshops = () => (
  <div>
    <div className = "text container">
    <img className = "image1" src = {instructor} alt = "workshop"/>
      <div className = "header" >
        <text>WORKSHOPS</text>
        </div>
      <p className = "regtext">Looking for a casual way to build upon your dance skills? You’re in luck, our workshops are funky, fresh, and best of all free for all to attend! Our workshops are beginner-friendly, as we aim to expose dancers to varying styles of dance and fundamentals. Workshops occur bi-weekly each quarter through zoom, so feel free to drop by any time. We strive to promote dance education and dance diversity and and encourage you to attend!</p>
      <p className = "subtext">Interested in attending a workshop? 
      <a className = "link" href = "https://www.instagram.com/foundationschoreo/"> Follow our Instagram for the latest workshop updates.</a></p>
      <div className = "header" >
        <text>SEE YOU ON ZOOM!</text>
        </div>
      <p className = "regtext">Due to the current Covid-19 health crises, all our workshops will be hosted online through Zoom. But never fear! Foundations Choreography is still committed to making workshops fun and educational through this new online format.</p>
      <div>
        <text className = "subheader">
          ZOOM TIPS AND ETIQUETTE
        </text>
        <p className = "regtext">
        If you’re comfortable, please turn your camera on during groups! It’s a very validating for the instructors to watch their piece come to life.
        </p>
        <p className = "regtext">
        Don’t be afraid to ask questions in the chat or DM one of our LSHIP facilitators! These workshops are for YOU to learn.
        </p>
        <p className = "regtext">
        Lastly, don’t be afraid to encourage each other! Hype each other up in the chat. Hype up YOURSELF especially ;).
        </p>
        
      </div>
      <div className = "center" >
        <text>CHECK OUT OUR LATEST WORKSHOP SERIES ON YOUTUBE!</text>
      </div>
    </div>
    
    <div className = "image-container">
    <img className = "image" src = {workshop} alt = "browser tab"/>
    </div>
  </div>
)