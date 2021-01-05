import React from 'react';
import { Layout } from '../components/Layout';
import "../assets/css/forms.css"

export const AdminLship = () => (
  <React.Fragment>
      <div className = "header" ><text>ADMIN LEADERSHIP APPLICATION</text></div>
      <Layout>
      <p className= "regtext">Sorry! Applications for this are not open right now. Please check again later.</p>
      </Layout>
  </React.Fragment>
)