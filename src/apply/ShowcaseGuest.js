import React from 'react';
import { Layout } from '../components/Layout';
import "../assets/css/forms.css"

export const ShowcaseGuest = () => (
  <React.Fragment>
      <div className = "header" ><text>SHOWCASE GUEST ACT APPLICATION</text></div>
      <Layout>
      <p className= "regtext">Sorry! Applications for this are not open right now. Please check again later.</p>
      </Layout>
  </React.Fragment>
)