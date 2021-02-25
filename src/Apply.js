import React from 'react';
import "./Apply.css";
import { ApplyCard } from './components/ApplyCard';
import "./assets/css/fonts.css";
import "./assets/css/buttons.css"


export const Apply = () => (
  <React.Fragment>
    <div className = "header" ><text>JOIN THE COMMUNITY!</text></div>
      <div id = "row1" className = "row"> 
      <div className = "block1">
      <ApplyCard
      open = "1/5/21"
      close = "1/15/21"
      apply = "Apply Now"
      button = "btn-apply"
      url = "genmem"
      >General Member</ApplyCard>
      </div>
      
      <div className = "block1">
      <ApplyCard 
      open = "N/A"
      close = "2/28/21"
      apply = "Apply Now"
      button = "btn-apply"
      url = "workshopinst"
      >Workshop Instructor</ApplyCard>
      </div>
      
      <div className = "block1">
      <ApplyCard 
      open = "TBD"
      close = "TBD"
      apply = "Closed"
      button = "btn-closed"
      url = "dancelship"
      >Dance Leadership</ApplyCard>
      </div>
      
      </div>

      <div id = "row2" className = "row"> 
      <div className = "block2">
      <ApplyCard 
      open = "TBD"
      close = "TBD"
      apply = "Closed"
      button = "btn-closed"
      url = "showcaseguest"
      >Showcase Guest Act</ApplyCard>
      </div>
      
      <div className = "block2">
      <ApplyCard 
      open = "TBD"
      close = "TBD"
      apply = "Closed"
      button = "btn-closed"
      url = "springintern"
      >Spring Intern</ApplyCard>
      </div>
      
      <div className = "block2">
      <ApplyCard 
      open = "TBD"
      close = "TBD"
      apply = "Closed"
      button = "btn-closed"
      url = "adminlship"
      >Admin Leadership</ApplyCard>
      </div>   
      </div>
 
  </React.Fragment>
)