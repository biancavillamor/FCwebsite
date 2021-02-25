import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/fonts.css';
import { Home } from './Home';
import { Workshops } from './Workshops';
import { Sponsors } from './Sponsors';
import { Apply } from './Apply';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { AdminLship } from "./apply/AdminLship";
import { DanceLship } from "./apply/DanceLship";
import { GenMem } from "./apply/GenMem";
import { ShowcaseGuest } from "./apply/ShowcaseGuest";
import { WorkshopInst } from "./apply/WorkshopInst";
import { SpringIntern } from "./apply/SpringIntern"
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/workshops" component={Workshops} />
              <Route path="/sponsors" component={Sponsors} />
              <Route path="/apply" component={Apply} />
              <Route path="/applydancelship" component={DanceLship} />
              <Route path="/applyadminlship" component={AdminLship} />
              <Route path="/applygenmem" component={GenMem} />
              <Route path="/applyshowcaseguest" component={ShowcaseGuest} />
              <Route path="/applyworkshopinst" component={WorkshopInst} />
              <Route path="/applyspringintern" component={SpringIntern} />
              <Route component={NoMatch} />
              
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;